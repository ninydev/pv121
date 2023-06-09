// библиотека
const amqp = require("amqplib/callback_api");

// настройки соединения с шиной данных
const rabbitQueueChatGpt = process.env.RABBITMQ_QUEUE_CHAT_GPT || 'chatgpt';
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
        console.log("connect rabbit ok")
        amqpConnection = connection
        connection.createChannel(function(errorChannel, channel) {
            if (errorChannel) {
                console.log(errorChannel)
                process.exit(-1);
            }
            console.log("create rabbit channel ok")
            amqpChannel = channel

            amqpChannel.assertQueue(rabbitQueueChatGpt, {
                // durable: false
            });

            // setInterval( () => {
            //     let d = new Date().toLocaleString()
            //     console.log('Queue: ' + d)
            //     amqpChannel.sendToQueue(rabbitQueue, Buffer.from(d));
            // }, 30000 )
        });
    });

/**
 * Функция отсылает сообщение в очередь на обработку сообщений чатом
 * @param msg
 */
function sendMsgToChatGPT(msg) {
    if (typeof (msg) !== "string") {
        msg = JSON.stringify(msg)
    }
    amqpChannel.sendToQueue(rabbitQueueChatGpt, Buffer.from(msg))
}

module.exports = sendMsgToChatGPT



