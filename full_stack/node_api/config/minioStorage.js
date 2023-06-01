const Minio = require('minio');
const fs = require('fs');

// Настройки подключения к MinIO
const minioClient = new Minio.Client({
    endPoint: 'minio.storage',
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY
});

// Функция для загрузки изображения в хранилище MinIO
async function uploadImageToMinIO(bucketName, imageName, imagePath) {
    // Проверка существования ведра (bucket), и создание, если оно не существует
    const bucketExists = await minioClient.bucketExists(bucketName);
    if (!bucketExists) {
        await minioClient.makeBucket(bucketName);
        console.log('Bucket создан:', bucketName);
    }

    const fileStream = fs.createReadStream(imagePath);

    // Загрузка изображения в хранилище MinIO
    await minioClient.putObject(bucketName, imageName, fileStream);

    // Установка политики доступа для ведра
    const policy = `
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "PublicRead",
        "Effect": "Allow",
        "Principal": "*",
        "Action": [
          "s3:GetObject"
        ],
        "Resource": [
          "arn:aws:s3:::${bucketName}/*"
        ]
      }
    ]
  }
  `;
    await minioClient.setBucketPolicy(bucketName, policy);

    console.log('Изображение успешно загружено в MinIO');
}

module.exports = uploadImageToMinIO
