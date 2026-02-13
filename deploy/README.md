# Инструкция по деплою на VPS

## Предварительные требования

1. VPS сервер с Ubuntu 20.04/22.04
2. Домен с настроенными DNS записями
3. SSH доступ к серверу

## Шаг 1: Настройка DNS

Добавьте A-записи в настройках вашего домена:
```
A     @       YOUR_SERVER_IP
A     www     YOUR_SERVER_IP
```

Дождитесь распространения DNS (обычно 5-30 минут).

## Шаг 2: Первоначальная настройка сервера

Скопируйте скрипт установки на сервер и запустите:

```bash
# На вашем локальном компьютере:
scp deploy/setup-server.sh user@YOUR_SERVER_IP:~/

# Подключитесь к серверу:
ssh user@YOUR_SERVER_IP

# Запустите скрипт установки (замените your-domain.com на ваш домен):
bash setup-server.sh your-domain.com
```

Скрипт установит:
- Node.js (LTS версия)
- PM2 (менеджер процессов)
- Nginx (веб-сервер)
- Certbot (для SSL сертификатов)

## Шаг 3: Загрузка кода приложения

### Вариант A: Через Git (рекомендуется)

```bash
# На сервере:
cd /var/www/archin-site
git clone https://github.com/YOUR_USERNAME/archin-site.git .
```

### Вариант B: Через rsync

```bash
# На локальном компьютере (из корня проекта):
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.next' \
  ./ user@YOUR_SERVER_IP:/var/www/archin-site/
```

## Шаг 4: Деплой приложения

```bash
# На сервере:
cd /var/www/archin-site
bash deploy/deploy-app.sh
```

Этот скрипт:
- Установит зависимости
- Соберет приложение
- Запустит его через PM2

## Шаг 5: Получение SSL сертификатов

```bash
# На сервере:
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Certbot автоматически:
- Получит бесплатные SSL сертификаты от Let's Encrypt
- Настроит Nginx для использования HTTPS
- Настроит автоматическое обновление сертификатов

## Обновление приложения

Когда нужно обновить приложение:

```bash
# На сервере:
cd /var/www/archin-site
git pull origin main
bash deploy/update-app.sh
```

## Полезные команды

### PM2 команды
```bash
pm2 status              # Статус приложения
pm2 logs archin-site    # Логи приложения
pm2 restart archin-site # Перезапуск
pm2 stop archin-site    # Остановка
pm2 monit               # Мониторинг в реальном времени
```

### Nginx команды
```bash
sudo nginx -t                 # Проверка конфигурации
sudo systemctl restart nginx  # Перезапуск Nginx
sudo systemctl status nginx   # Статус Nginx
sudo tail -f /var/log/nginx/error.log  # Логи ошибок
```

### SSL сертификаты
```bash
sudo certbot renew --dry-run  # Тест обновления сертификатов
sudo certbot certificates     # Список сертификатов
```

## Структура на сервере

```
/var/www/archin-site/        # Директория приложения
├── app/                      # Next.js приложение
├── components/
├── public/
├── .next/                    # Собранное приложение
└── node_modules/

/etc/nginx/sites-available/archin-site  # Конфигурация Nginx
/var/log/nginx/              # Логи Nginx
```

## Решение проблем

### Приложение не запускается
```bash
pm2 logs archin-site  # Проверьте логи
```

### Nginx ошибки
```bash
sudo nginx -t  # Проверьте конфигурацию
sudo tail -f /var/log/nginx/error.log
```

### SSL сертификат не получается
- Проверьте что DNS записи указывают на правильный IP
- Убедитесь что порты 80 и 443 открыты
- Проверьте `sudo ufw status`

## Безопасность

Рекомендуется также:
1. Настроить SSH ключи вместо паролей
2. Отключить вход root через SSH
3. Регулярно обновлять систему: `sudo apt update && sudo apt upgrade`
4. Настроить fail2ban для защиты от брутфорса
