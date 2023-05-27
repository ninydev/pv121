import express from "express";
import { Server } from "socket.io";
import cors from "cors";

// Для доступа с других доменных имен и для отдачи файлов - добавим веб севвер
const app = express();
app.use(cors({ origin: "*" }));

// Отддаим файл с клиентом, что бы увидеть работу сокетов
app.get("/", (req, res) => {
    const filePath = "/home/keeper/PhpstormProjects/pv121/socket_easy/client.html";
    res.sendFile(filePath);
});

// Запустим веб сервер
const server = app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// Запустим сокет сервер
const io = new Server(server);


io.on("connection", (socket) => {
    // send a message to the client
    socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

    socket.broadcast.emit("hello from server", "Hello to All - new User is income")

    // receive a message from the client
    socket.on("hello from client", (...args) => {
        console.log("hello from client")
        console.log(args)
    });

    socket.on("disconnect", () => {
        socket.broadcast.emit("hello from server", "Some user go away")
    })
});
