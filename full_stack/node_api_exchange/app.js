// Модуль для работы с веб сервером
let express = require('express');
let app = express();
const axios = require('axios');
const url = process.env.URL_EXCHANGE + '/latest/USD';

/**
 * Я буду обрабатывать только 1 запрос
 */
app.get('/api/exchange', function (req, res) {
    axios.get(url)
        .then(response => {
            // Обработка успешного ответа
            console.log(response.data);
            res.send(response.data)
        })
        .catch(error => {
            // Обработка ошибки
            console.error(error);
            res.sendStatus(419).send(error)
        });
})

/**
 * Запущу систему для прослушивания
 */
app.listen(3000 ,() => {
    console.log('wait')
})

