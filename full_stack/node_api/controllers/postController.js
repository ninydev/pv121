const {request} = require("express");


// Так я бы выполнял эту работу сам
// const fetchChatGPT = require('./../config/chatGPT')

// Подключу способ постановки задач в очередь
const sendMsgToChatGPT = require('./../config/producerChatGPT')

// Некая коллекция постов
let posts = [
    {id: 0, title: "Hello 1", body: "world 1", chatGPT: null},
]



// CRUD - (BREAD)
// RESTful API - шаблон соответствия операции с сущностью
// GET --> Read
// POST --> Create
// PUT --> Update
// DELETE --> Delete

exports.getPosts = function (request, response) {
    response.send(posts)
}

exports.getPost = function (request, response) {
    let postId = request.params.postId
    response.send(posts[postId])
}

exports.createPost = async function (request, response) {
    let newPost = request.body
    // Конечно тут нужно собрать базу данных, добавлять через базу
    // Если пост с картинкой - загружать ее в стор
    // Создание сущности (как в регистрации и тп)
    newPost.id = posts.length

    // Вот тут у меня возникает проблема

    // --------------------------------------------
    // newPost.chatGPT = await fetchChatGPT(
    //     "Напиши ключевые слова для этого текста. На русском. Не более 10. Ответ раздели запятыми: \n " + newPost.body)

    sendMsgToChatGPT(newPost)




    // --------------------------------------------
    console.log("Create New Post: ")
    console.log(request.body)

    // Есть два подхода
    // 1 - если в сущности появился только id - нет смысла возвращать всю сущность
    // 2 - если появились сторонние поля (например отзыв чата)
    // есть смысл возвращать всю сущность
    // !!! - если у вас на front не используется JS Framework или AJAX
    // сущность нужно возвращать всегда

    posts.push(newPost)
    response.status(201).send(newPost)
}

exports.updatePost = function (request, response) {
    let postId = request.params.postId
    let newPost = request.body
    posts[postId] = newPost
    response.status(204).send(newPost)
}


exports.deletePost = function (request, response) {
    let postId = request.params.postId
    posts.splice(postId, 1)
    response.status(204).send()
}
