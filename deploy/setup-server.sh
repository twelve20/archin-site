#!/bin/bash

# Скрипт установки окружения на VPS для Next.js приложения
# Использование: bash setup-server.sh YOUR_DOMAIN

set -e

DOMAIN=$1

if [ -z "$DOMAIN" ]; then
    echo "Ошибка: укажите домен"
    echo "Использование: bash setup-server.sh your-domain.com"
    exit 1
fi

echo "🚀 Начинаем настройку сервера для $DOMAIN..."

# Обновление системы
echo "📦 Обновление системы..."
sudo apt update
sudo apt upgrade -y

# Установка Node.js (LTS версия через NodeSource)
echo "📦 Установка Node.js..."
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# Установка PM2 глобально
echo "📦 Установка PM2..."
sudo npm install -g pm2

# Установка Nginx
echo "📦 Установка Nginx..."
sudo apt install -y nginx

# Установка Certbot для SSL сертификатов
echo "📦 Установка Certbot..."
sudo apt install -y certbot python3-certbot-nginx

# Создание директории для приложения
echo "📁 Создание директории приложения..."
sudo mkdir -p /var/www/archin-site
sudo chown -R $USER:$USER /var/www/archin-site

# Настройка Nginx
echo "🔧 Настройка Nginx..."
sudo tee /etc/nginx/sites-available/archin-site > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

# Активация конфигурации Nginx
sudo ln -sf /etc/nginx/sites-available/archin-site /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Проверка конфигурации Nginx
sudo nginx -t

# Перезапуск Nginx
sudo systemctl restart nginx

# Настройка firewall
echo "🔒 Настройка firewall..."
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
echo "y" | sudo ufw enable

echo "✅ Базовая настройка завершена!"
echo ""
echo "📋 Следующие шаги:"
echo "1. Убедитесь что DNS записи домена указывают на IP этого сервера"
echo "   - A запись: $DOMAIN -> IP сервера"
echo "   - A запись: www.$DOMAIN -> IP сервера"
echo "2. Загрузите код приложения в /var/www/archin-site"
echo "3. Запустите скрипт deploy-app.sh"
echo "4. Получите SSL сертификат командой: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
