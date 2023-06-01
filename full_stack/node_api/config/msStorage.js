const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
const fs = require('fs');

// Настройка подключения к Azure Blob Storage
const accountName = process.env.AZURE_STORAGE_NAME;
const accountKey = process.env.AZURE_STORAGE_KEY;
const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, sharedKeyCredential);


// Функция для загрузки файла в хранилище Azure Blob Storage и создания контейнера
async function uploadFileToAzureBlobStorage(containerName, fileName, filePath) {
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // Создание контейнера, если его не существует
    if (!await containerClient.exists()) {
        await containerClient.create();
    }

    const blockBlobClient = containerClient.getBlockBlobClient(fileName);

    await blockBlobClient.uploadFile(filePath);


    console.log('Файл успешно загружен в Azure Blob Storage');
}

module.exports = uploadFileToAzureBlobStorage;
