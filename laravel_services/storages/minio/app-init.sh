##!/bin/bash
#
## Создание хранилища
##mc alias set storage http://minio:9000 root password
## mc config host add storage http://minio:9000 root password
#mc config host add storage_minio http://storage_minio:9000 TGtZfe96wQPIx0dY kD9IjnOpgdG0l33JSMGhLWmPacNIxw7y
#
## Создание нового пользователя
#mc admin user add storage_minio webuser kfFh3J2gkD56Hl3f4d7
#
## Добавление пользователю политики доступа
#mc admin policy set storage_minio readwrite user=webuser
#mc admin user key add storage_minio webuser TGtZfe96wQPIx0dY kD9IjnOpgdG0l33JSMGhLWmPacNIxw7y
#
##Запуск сервера
##mc server --console-address :9009 /data
