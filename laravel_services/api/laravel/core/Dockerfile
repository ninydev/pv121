FROM php:8.2-alpine
WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql sockets
RUN curl -sS https://getcomposer.org/installer | php -- \
     --install-dir=/usr/local/bin --filename=composer

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY ./composer.json /var/www/html

RUN composer install

EXPOSE 8000
