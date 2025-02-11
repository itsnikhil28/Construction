# Use an official PHP image with Apache
FROM php:8.2-apache

# Install required system dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git \
    curl \
    libonig-dev \
    && docker-php-ext-install pdo pdo_mysql gd

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy Laravel project files
COPY . .

# Ensure necessary directories exist
RUN mkdir -p storage bootstrap/cache

# Set correct permissions
RUN chmod -R 775 storage bootstrap/cache

# **(NEW) Install Composer Dependencies**
RUN composer install --no-dev --optimize-autoloader --ignore-platform-reqs

# Set Apache DocumentRoot to Laravel's public folder
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# Expose port 80 (Apache)
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
