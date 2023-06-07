const uploadFileToAzureBlobStorage = require("../config/msStorage");
const getImageDescription = require("../config/msComputerVision");
const uploadImageToMinIO = require("../config/minioStorage");

exports.uploadFile = function (request, response) {
    if (!request.files || Object.keys(request.files).length === 0) {
        console.log('файлов не найдено')
        return response.status(400).send('Необходимо выбрать файл');
    }

    // Обращение к загруженному файлу
    const file = request.files.fileBody;

    // Я получил этот файл
    console.log(file)

    // Путь к папке назначения
    const destinationPath = '/usr/src/files/' + file.name;

    file.mv(destinationPath, (err) => {
        if (err) {
            console.error(err);
            // Обработка ошибки сохранения файла
        } else {
            // Файл успешно сохранен
            // ...

            uploadFileToAzureBlobStorage('amazon-static-files', file.name, destinationPath)
            // getImageDescription('https://itstepmk121.blob.core.windows.net/amazon-static-files/' + file.name)
            // getImageDescription('https://i0.wp.com/www.ninydev.com/wp-content/uploads/2017/07/img_2.jpg')
            // getImageDescription('https://i0.wp.com/www.ninydev.com/wp-content/uploads/2017/07/img_3.jpg')
            // getImageDescription('https://i0.wp.com/www.ninydev.com/wp-content/uploads/2017/07/img_4.jpg')
            // getImageDescription('https://i0.wp.com/www.ninydev.com/wp-content/uploads/2017/07/img_5.jpg')
            // getImageDescription('https://i0.wp.com/www.ninydev.com/wp-content/uploads/2017/07/img_6.jpg')
            // getImageDescription('https://i0.wp.com/www.ninydev.com/wp-content/uploads/2017/07/img_7.jpg')
            // uploadImageToMinIO('min-io-static-files',file.name, destinationPath)

        }
    });


    response.status(200).send({
        message: "ok"
    })
}
