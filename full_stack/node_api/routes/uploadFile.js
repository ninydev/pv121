let express = require('express')
let router = express.Router()

let uploadFileController = require('./../controllers/uploadFileController')

router.post('/', uploadFileController.uploadFile)

module.exports = router;
