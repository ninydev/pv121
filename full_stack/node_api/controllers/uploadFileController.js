
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
    const destinationPath = '/usr/src/app/files/' + file.name;

    file.mv(destinationPath, (err) => {
        if (err) {
            console.error(err);
            // Обработка ошибки сохранения файла
        } else {
            // Файл успешно сохранен
            // ...
        }
    });


    response.status(200).send({
        message: "ok"
    })
}
