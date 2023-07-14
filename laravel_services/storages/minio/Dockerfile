FROM minio/minio:latest

# скопировать файл настройки хранилища
COPY ./app-init.sh /tmp/app-init.sh

# резрешить его выполнение
RUN chmd 777 /tmp/app-init.sh

# запусить выполнение
RUN /tmp/app-init.sh



