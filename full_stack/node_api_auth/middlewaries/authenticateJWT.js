const jwt = require("jsonwebtoken");

function authenticateJWT(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]; // Получаем токен из заголовка Authorization

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => { // Здесь "your_secret_key" - это ваш секретный ключ для подписи и проверки токена
            if (err) {
                return res.sendStatus(403); // Ошибка проверки токена - отправляем статус 403 (Forbidden)
            }

            req.user = user; // Сохраняем данные пользователя из токена в объекте запроса
            next(); // Продолжаем выполнение следующих middleware или обработчика маршрута
        });
    } else {
        res.sendStatus(401); // Отсутствует токен - отправляем статус 401 (Unauthorized)
    }
}

module.exports = authenticateJWT;
