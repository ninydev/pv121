let express = require('express');
let router = express.Router();

let authController = require('../controllers/authController')

// Проложил маршрут для регистрации
router.post('/register', authController.register)
router.get('/all',authController.showAll)

module.exports = router;
