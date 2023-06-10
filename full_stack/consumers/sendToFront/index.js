// настройки соединения с шиной данных
const rabbitQueueSendToFront = process.env.RABBITMQ_QUEUE_SENDTOFRONT || 'sendToFront';
const rabbitUser = process.env.RABBITMQ_DEFAULT_USER || 'user';
const rabbitPassword = process.env.RABBITMQ_DEFAULT_PASS || 'password';
const rabbitServer = process.env.RABBITMQ_SERVER || 'rabbit.mq';
const rabbitPort = process.env.RABBITMQ_PORT || 5672;

const amqp = require("amqplib/callback_api");

// Настройки соединения с сокетами
const redisSocketHost = process.env.REDIS_SOCKET_HOST || 'redis.socket';
const redisSocketPort = process.env.REDIS_SOCKET_PORT || 6379;

const { Emitter } = require("@socket.io/redis-emitter");
const { createClient } = require("redis");

const connect = async () => {
    const redisClient = createClient({url: `redis://${redisSocketHost}:${redisSocketPort}`});
    redisClient.on("connect", () => {
        console.log("connected to redis server");
    });

    // Ожидание соединения
    await redisClient.connect();
    const io = new Emitter(redisClient);

    amqp.connect(`amqp://${rabbitUser}:${rabbitPassword}@${rabbitServer}:${rabbitPort}`,
        function(errorConnect, connection) {
            if (errorConnect) {
                console.log(errorConnect)
                process.exit(-1);
            }
            console.log("connect sendToFront rabbit ok")
            amqpConnection = connection
            connection.createChannel(function(errorChannel, channel) {
                if (errorChannel) {
                    console.log(errorChannel)
                    process.exit(-1);
                }
                console.log("create sendToFront rabbit channel ok")

                let amqpChannelFront = channel

                amqpChannelFront.assertQueue(rabbitQueueSendToFront, {
                    // durable: false
                });

                // А тут мы слушаем что нужно сделать
                amqpChannelFront.consume(rabbitQueueSendToFront, function(msg) {
                    // let seconds = 20
                    // let waitTill = new Date(new Date().getTime() + seconds * 1000);
                    // while(waitTill > new Date()){}

                    data = msg.content.toString()
                    let d = new Date().toLocaleString()
                    console.log("[x] " + d + "  ToFront %s ", data)

                    let entData = JSON.parse(data)

                    if (typeof (entData.body) !== 'string') {
                        entData.body = JSON.stringify(entData)
                    }
                    // Отправить на сокеты
                    io.emit(entData.event, entData.body)
                }, {
                    noAck: true
                });


            });
        });


}

connect().catch(console.error);
