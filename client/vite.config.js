import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://server:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
})
