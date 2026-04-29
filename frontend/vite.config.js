import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        // Strip /api prefix before forwarding:
        // /api/chat  →  http://localhost:5000/chat
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
