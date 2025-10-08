import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portofolio-personnel-esther/',
  css: {
    postcss: './postcss.config.js',
  },
})
