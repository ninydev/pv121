#!/bin/bash

# Создание хранилища
mc alias set storage http://minio:9000 root password
mc config host add storage http://minio:9000 root password

# Создание нового пользователя
mc admin user add storage webuser kfFh3J2gkD56Hl3f4d7

# Добавление пользователю политики доступа
mc admin policy set torage readwrite user=webuser
