FROM php:8.2-alpine

RUN mkdir -p /var/www/html
WORKDIR /var/www/html


# Устанавливаем базовый образ PHP
FROM php:8.2-fpm

# Устанавливаем необходимые расширения PHP
RUN docker-php-ext-install pdo pdo_mysql

# Устанавливаем Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Устанавливаем Nginx
RUN apt-get update && apt-get install -y nginx

# Копируем файлы проекта в контейнер
COPY . /var/www/html

# Устанавливаем зависимости проекта
RUN composer install --no-dev --no-scripts --no-progress --prefer-dist

# Настраиваем права доступа
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Открываем порт для доступа к приложению
EXPOSE 80

# Запускаем PHP-FPM и Nginx
CMD service php8.2-fpm start && nginx -g "daemon off;"
