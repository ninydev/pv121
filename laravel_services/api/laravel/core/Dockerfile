FROM php:8.2-alpine

RUN mkdir -p /var/www/html
WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

#RUN curl -sS https://getcomposer.org/installer | php -- \
#     --install-dir=/usr/local/bin --filename=composer

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY ./composer.json .

RUN composer install --no-dev --no-scripts --no-progress --prefer-dist

EXPOSE 8000
