const {generateUUID} = require('../services/generateUUID')
const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

let users = []

exports.showAll = function (request, response) {
    response.status(200).send(users)
}

exports.register = function (request, response) {
    let newUser = request.body
    newUser.id = generateUUID()

    users.push(newUser)
    console.log(JWT_SECRET_KEY)

    // Тут будет процесс внесения пользователя в базу данных

    // Процесс создания ключа


    // Перед отправлением наружу пользователя необходимо удалить пароли
    // и отдавать только нужную информацию
    response.status(201).json({
        user: newUser,
        token: jwt.sign(newUser, JWT_SECRET_KEY)
    })
}
