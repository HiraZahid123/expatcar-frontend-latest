module.exports = {
  apps: [
    {
      name: 'expatcarbuyers',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/home/forge/expatcarbuyers.com',
      instances: 2,           // 2 workers on a 4-vCPU Hetzner CX31
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '512M',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/log/pm2/expatcarbuyers-error.log',
      out_file: '/var/log/pm2/expatcarbuyers-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
    },
  ],
};
