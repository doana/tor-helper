import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/tor-helper/',
  server: {
    watch: {
      usePolling: true,
    },
    cors: true
  },
  plugins: [react()],
})
