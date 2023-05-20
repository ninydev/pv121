const {generateUUID} = require('../services/generateUUID')

let users = []

exports.showAll = function (request, response) {
    response.status(200).send(users)
}

exports.register = function (request, response) {
    let newUser = request.body
    newUser.id = generateUUID()

    users.push(newUser)
    console.log(newUser)

    // Тут будет процесс внесения пользователя в базу данных

    response.status(201).send(newUser)
}
