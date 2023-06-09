/**
 * Установочные параметры для сокетов
 */
const port = process.env.PORT || 3000;
const serverName = process.env.NAME || 'Node Socket';
const redisSocketHost = process.env.REDIS_SOCKET_HOST || 'redis.sockets';
const redisSocketPort = process.env.REDIS_SOCKET_PORT || 6379;

/**
 * Подключение необходимых модулей
 */
const { Server } = require("socket.io");
const { createClient } = require("redis");
const { createAdapter } = require("@socket.io/redis-adapter");

/**
 * Подключение к Redis для использования адаптера
 */
const pubClient = createClient({ url: `redis://${redisSocketHost}:${redisSocketPort}` });
const subClient = pubClient.duplicate();
pubClient.on("connect", () => { console.log("pubs connected");});
subClient.on("connect", () => { console.log("subs connected"); });

/**
 * Создание экземпляра sockets сервера
 */
const io = new Server();

/**
 * Подготовка sockets сервера
 */
Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
    io.adapter(createAdapter(pubClient, subClient));

    /**
     * Реакции сокета на события
     */
    io.on("connection", (socket) => {
        socket.emit('my-name-is', serverName);
        console.log("connection: " + socket.handshake.address)

        socket.on('user-message', data => {
            console.log("User Message: " + data)
            socket.emit('user-message', data)
            socket.broadcast.emit('user-message', data)
        })

        /**
         * Тут можно далее описывать события
         */
        socket.on("disconnect", data => {
            console.log("disconnect: " + socket.handshake.address)
        })

    });

    /**
     * Запуск sockets сервера
     */
    io.listen(port, (err) => {
        if (err) { console.log(err)}
        else { console.log("Start Socket Server : port : " + port)}
    });
})
    .catch(err => {
    console.log(err)
});
