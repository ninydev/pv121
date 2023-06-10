// настройки соединения с шиной данных
const rabbitQueuePingator = process.env.RABBITMQ_QUEUE_PINGATOR || 'pingator';
const rabbitUser = process.env.RABBITMQ_DEFAULT_USER || 'user';
const rabbitPassword = process.env.RABBITMQ_DEFAULT_PASS || 'password';
const rabbitServer = process.env.RABBITMQ_SERVER || 'rabbit.mq';
const rabbitPort = process.env.RABBITMQ_PORT || 5672;

const amqp = require("amqplib/callback_api");

amqp.connect(`amqp://${rabbitUser}:${rabbitPassword}@${rabbitServer}:${rabbitPort}`,
    function(errorConnect, connection) {
        if (errorConnect) {
            console.log(errorConnect)
            process.exit(-1);
        }
        console.log("connect pingator rabbit ok")
        amqpConnection = connection
        connection.createChannel(function(errorChannel, channel) {
            if (errorChannel) {
                console.log(errorChannel)
                process.exit(-1);
            }
            console.log("create pingator rabbit channel ok")
            amqpChannel = channel

            amqpChannel.assertQueue(rabbitQueuePingator, {
                // durable: false
            });

            // А тут мы слушаем что нужно сделать
            amqpChannel.consume(rabbitQueuePingator, function(msg) {
                // let seconds = 20
                // let waitTill = new Date(new Date().getTime() + seconds * 1000);
                // while(waitTill > new Date()){}

                data = msg.content.toString()
                let d = new Date().toLocaleString()
                console.log("[x] " + d + "  Received %s ", data)
            }, {
                noAck: true
            });


        });
    });
