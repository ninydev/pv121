let express = require('express')
let router = express.Router()

let postController = require("../controllers/postController")

router.get('/', postController.getPosts)
router.get('/:postId', postController.getPost)
router.post('/', postController.createPost)
router.put('/:postId', postController.updatePost)
router.delete('/:postId', postController.deletePost)

module.exports = router;
