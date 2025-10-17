# TikTok Shop - 完整电商平台

一个基于 Vue.js + NestJS 的现代化电商平台，包含管理后台、商家端和用户端。

## 🏗️ 项目架构

```
TikTokShop/
├── ecommerce-backend/     # 后端API服务 (NestJS + PostgreSQL)
├── admin/                 # 管理后台 (Vue.js + Element Plus)
├── merchant/              # 商家端 (Vue.js + Element Plus)
├── user-app/              # 用户商城 (Vue.js + Element Plus)
└── database/              # 数据库相关文件
```

## 🚀 快速开始

### 环境要求
- Node.js 18+
- PostgreSQL 12+
- PM2 (生产环境)

### 安装依赖
```bash
# 安装根目录依赖
npm install

# 安装后端依赖
cd ecommerce-backend && npm install

# 安装前端依赖
cd ../admin && npm install
cd ../merchant && npm install
cd ../user-app && npm install
```

### 配置环境变量
```bash
# 复制环境变量模板
cp .env.example .env

# 编辑数据库配置
vim .env
```

### 启动所有服务
```bash
# 使用PM2启动所有服务
./start-all.sh

# 或手动启动
npm run start
```

## 🌐 访问地址

| 服务 | 地址 | 说明 |
|------|------|------|
| 🔧 API服务 | http://localhost:3000 | NestJS后端API |
| 🖥️ 管理后台 | http://localhost:5175 | 平台管理界面 |
| 🏪 商家端 | http://localhost:5174 | 商家管理界面 |
| 📱 用户商城 | http://localhost:3001 | 用户购物界面 |

## 🔑 测试账户

### 管理员账户
- **用户名**: admin
- **密码**: 123456

### 商家账户
- **用户名**: merchant001
- **密码**: password123

### 用户账户
- **手机号**: 13800138000
- **密码**: 123456

## 📋 功能特性

### 🛍️ 用户商城
- ✅ 商品浏览和搜索
- ✅ 购物车管理
- ✅ 订单管理
- ✅ 用户注册/登录
- ✅ 响应式设计（桌面/移动端）

### 🏪 商家端
- ✅ 商品管理
- ✅ 订单处理
- ✅ 财务管理
- ✅ 店铺设置
- ✅ 信用评级系统

### 🖥️ 管理后台
- ✅ 商家管理
- ✅ 商品管理
- ✅ 订单管理
- ✅ 用户管理
- ✅ 系统设置
- ✅ 资金管理
- ✅ 提现审核

### 🔧 后端API
- ✅ RESTful API设计
- ✅ JWT身份认证
- ✅ 数据库事务管理
- ✅ 文件上传
- ✅ 资金冻结/解冻系统
- ✅ 信用评级系统

## 💰 资金管理系统

### 冻结逻辑
- **冻结金额**: 商品成本价
- **平台抽成**: 0%
- **商家收益**: 售价 - 成本价

### 示例
```
成本价: 100马币
商家售价: 130马币
冻结金额: 100马币 (成本价)
商家收益: 30马币 (130-100)
```

## 🛠️ 技术栈

### 前端
- **Vue.js 3** - 渐进式框架
- **TypeScript** - 类型安全
- **Element Plus** - UI组件库
- **Vite** - 构建工具
- **Vue Router** - 路由管理
- **Pinia** - 状态管理

### 后端
- **NestJS** - Node.js框架
- **TypeORM** - ORM框架
- **PostgreSQL** - 数据库
- **JWT** - 身份认证
- **bcrypt** - 密码加密

### 部署
- **PM2** - 进程管理
- **Render** - 云部署平台
- **PostgreSQL** - 云数据库

## 📦 部署

### 本地开发
```bash
# 启动所有服务
./start-all.sh

# 查看服务状态
pm2 status

# 查看日志
pm2 logs
```

### 生产部署
```bash
# 构建前端
cd admin && npm run build
cd ../merchant && npm run build
cd ../user-app && npm run build

# 启动生产服务
pm2 start ecosystem.config.js --env production
```

## 🔧 管理命令

```bash
# PM2管理
pm2 status          # 查看状态
pm2 logs            # 查看日志
pm2 monit           # 监控面板
pm2 restart all     # 重启所有服务
pm2 stop all        # 停止所有服务
pm2 delete all      # 删除所有服务

# 数据库管理
npm run db:migrate  # 运行迁移
npm run db:seed     # 填充数据
```

## 📊 项目统计

- **总代码行数**: 50,000+
- **API接口**: 80+
- **数据库表**: 25+
- **前端页面**: 50+
- **组件数量**: 100+

## 🎯 开发规范

### 代码风格
- 使用 TypeScript 严格模式
- 遵循 ESLint 规则
- 组件命名使用 PascalCase
- 文件命名使用 kebab-case

### Git 提交规范
```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式
refactor: 重构
test: 测试
chore: 构建/工具
```

## 📝 更新日志

### v1.0.0 (2025-01-15)
- ✅ 完成基础电商功能
- ✅ 实现资金冻结系统
- ✅ 添加信用评级系统
- ✅ 完善管理后台
- ✅ 优化用户界面
- ✅ 删除UniApp依赖

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- **项目维护者**: Admin
- **邮箱**: admin@example.com
- **项目地址**: https://github.com/Janice0516/TikShop

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！