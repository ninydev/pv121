const {generateUUID} = require('../services/generateUUID')
const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const UserSqlModel = require('../models/UserSqlModel')
const UserMongoModel = require('../models/UserMongoModel')

let users = []

exports.showAll = function (request, response) {
    response.status(200).send(users)
}

exports.register = function (request, response) {
    let bodyUser = request.body

    console.log(bodyUser)

    UserSqlModel.create(bodyUser).then((data) =>{
        console.log(data)
        response.status(201).json({
            user: data.dataValues,
            token: jwt.sign({
                id: data.dataValues.id,
                email: data.dataValues.email
            }, JWT_SECRET_KEY)
        })
    }).catch(err => {
        console.log(err)
        response.status(419).json({
            err
        })
    })

    // const newMongoUser = new UserMongoModel(bodyUser)
    // newMongoUser.save( )
    //     .then(data => {
    //         let newUser = {
    //             _id: data._id,
    //             email: data.email,
    //         }
    //             response.status(201).json({
    //                 user: newUser,
    //                 token: jwt.sign(newUser, JWT_SECRET_KEY)
    //             })
    //     }).catch(err => {
    //         console.log(err)
    //         response.status(419).json({
    //             err
    //         })
    //     })

}
