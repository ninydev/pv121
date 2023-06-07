
// Некая коллекция постов
let posts = [
    {id: 0, title: "Hello 1", body: "world 1"},
    {id: 1, title: "Hello 2", body: "world 2"}
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

exports.createPost = function (request, response) {
    let newPost = request.body
    newPost.id = posts.length
    console.log("Create New Post: ")
    console.log(request.body)
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
