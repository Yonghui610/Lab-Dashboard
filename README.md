# 实验中心原型页面 (Vue 3 + TypeScript + Vite)

本项目是一个高保真的实验中心原型页面，使用 Vue 3、TypeScript、Vite 和 Tailwind CSS 开发。项目旨在展示现代化的前端开发流程和组件化设计思想。

## 🛠️ 技术栈

- **框架**: [Vue 3](https://vuejs.org/) (Composition API)
- **构建工具**: [Vite](https://vitejs.dev/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **图标**: [Lucide Vue Next](https://lucide.dev/guide/packages/lucide-vue-next)

## 🚀 快速开始

### 1. 获取代码

如果您已经克隆了代码，请跳过此步。

```bash
git clone [您的仓库地址]
cd Lab-Dashboard
```

### 2. 安装依赖

推荐使用 `npm` 进行依赖安装：

```bash
npm install
```

### 3. 启动开发服务器

启动本地开发环境，实时预览修改：

```bash
npm run dev
```

浏览器访问: `http://localhost:5173`

### 4. 构建生产版本

构建用于生产环境的代码：

```bash
npm run build
```

构建完成后，可以在本地预览生产构建：

```bash
npm run preview
```

## 📂 项目结构

```
src/
├── assets/          # 静态资源
├── components/      # 业务组件
│   ├── ExperimentCard.vue    # 实验卡片组件
│   ├── ExperimentList.vue    # 实验列表容器
│   ├── FilterBar.vue         # 筛选工具栏
│   ├── Header.vue            # 顶部导航
│   ├── HeroBanner.vue        # 顶部横幅
│   ├── Pagination.vue        # 分页组件
│   ├── StatsBottomCard.vue   # 底部统计卡片
│   └── StatsTopCards.vue     # 顶部统计卡片
├── App.vue          # 根组件 (布局入口)
├── main.ts          # 应用入口
└── style.css        # 全局样式 (Tailwind 指令)
```
