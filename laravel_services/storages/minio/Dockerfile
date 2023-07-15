FROM minio/minio:latest

# Установка утилиты mc
RUN curl -LO https://dl.min.io/client/mc/release/linux-amd64/mc && \
    chmod +x mc && \
    mv mc /usr/bin/mc

# скопировать файл настройки хранилища
COPY ./app-init.sh /tmp/app-init.sh

# резрешить его выполнение
RUN chmod +x /tmp/app-init.sh

# запустить скрипт при сборке контейнера
# RUN /tmp/app-init.sh

# команда для запуска Minio сервера
#CMD ["minio", "server", "/data"]
