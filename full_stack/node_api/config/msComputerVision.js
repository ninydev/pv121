const msRestAzure = require('ms-rest-azure');
const ComputerVision = require('azure-cognitiveservices-computervision');

// Замените значения переменных соответствующими ключами и конечной точкой вашего ресурса Computer Vision
const subscriptionKey = process.env.AZURE_COMPUTER_VISION_KEY;
const endpoint = process.env.AZURE_COMPUTER_VISION_ENDPOINT;


// Создайте клиент Computer Vision
const credentials = new msRestAzure.CognitiveServicesCredentials(subscriptionKey);
const client = new ComputerVision.ComputerVisionClient(credentials, endpoint);

// Функция для отправки фотографии и получения описания
async function getImageDescription(imageUrl) {
    // Отправляем запрос на описание изображения
    console.log(imageUrl)
    const result = await client.describeImage(imageUrl, { language: 'en' });
    console.log('Computer Vision result')
    console.log(result)
    return result;
}


module.exports = getImageDescription
/*
// Пример использования
const imageUrl = 'URL_TO_YOUR_IMAGE';

getImageDescription(imageUrl)
    .then(description => {
        console.log('Описание изображения:', description);
    })
    .catch(err => {
        console.error('Ошибка:', err);
    });
*/
