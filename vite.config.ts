import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/Lab-Dashboard/', // TODO: 如果部署到 https://<USERNAME>.github.io/<REPO>/，请将此值修改为 /<REPO>/。如果部署到 https://<USERNAME>.github.io/，请修改为 /
})
