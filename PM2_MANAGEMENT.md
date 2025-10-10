# 🚀 PM2 进程管理指南

## 📋 快速命令

### 启动服务
```bash
# 启动所有服务
./start-all.sh

# 或使用PM2直接启动
pm2 start ecosystem.config.js
```

### 停止服务
```bash
# 停止所有服务
./stop-all.sh

# 或使用PM2直接停止
pm2 stop all
pm2 delete all
```

### 监控服务
```bash
# 查看服务状态
pm2 status

# 查看日志
pm2 logs

# 实时监控
pm2 monit

# 或使用监控脚本
./monitor.sh
```

## 🔧 服务管理

### 单个服务操作
```bash
# 重启特定服务
pm2 restart backend-api
pm2 restart admin-frontend
pm2 restart merchant-frontend
pm2 restart user-app

# 停止特定服务
pm2 stop backend-api

# 查看特定服务日志
pm2 logs backend-api
```

### 服务配置
- **后端API**: 端口3000，生产模式
- **管理后台**: 端口5175，开发模式
- **商家端**: 端口5174，开发模式
- **用户端**: 端口5176，开发模式

## 📊 日志文件
- 所有日志保存在 `logs/` 目录
- 错误日志: `*-error.log`
- 输出日志: `*-out.log`
- 综合日志: `*-combined.log`

## 🚨 故障排除
1. 查看服务状态: `pm2 status`
2. 查看错误日志: `pm2 logs --err`
3. 重启服务: `pm2 restart all`
4. 完全重置: `pm2 delete all && ./start-all.sh`
