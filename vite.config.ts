import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
// 为了解决 "类型“ImportMeta”上不存在属性“env”" 的问题，使用 process.env 替代 import.meta.env
  base: process.env.MODE === 'production'
  ? '/useSelfHook/' 
  : '/',
})
