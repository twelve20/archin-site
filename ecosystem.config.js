// PM2 конфигурация для продакшена
module.exports = {
  apps: [{
    name: 'archin-site',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/var/www/archin-site',
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    max_memory_restart: '1G',
    watch: false
  }]
}
