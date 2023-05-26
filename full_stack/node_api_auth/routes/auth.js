let express = require('express');
let router = express.Router();

let authController = require('../controllers/authController')
const authenticateJWT = require("../middlewaries/authenticateJWT");

// Проложил маршрут для регистрации
router.post('/register', authController.register)
// Закроем маршрут all авторизацией
router.get('/all', authenticateJWT,authController.showAll)

module.exports = router;
