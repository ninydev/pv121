// библиотека
const amqp = require("amqplib/callback_api");

// настройки соединения с шиной данных
const rabbitQueuePingator = process.env.RABBITMQ_QUEUE_PINGATOR || 'pingator';
const rabbitUser = process.env.RABBITMQ_DEFAULT_USER || 'user';
const rabbitPassword = process.env.RABBITMQ_DEFAULT_PASS || 'password';
const rabbitServer = process.env.RABBITMQ_SERVER || 'rabbit.mq';
const rabbitPort = process.env.RABBITMQ_PORT || 5672;

let amqpChannel

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

            setInterval( () => {
                let d = new Date().toLocaleString()
                console.log('Queue Ping: ' + d)
                amqpChannel.sendToQueue(rabbitQueuePingator, Buffer.from(d));
            }, 3000 )
        });
    });





