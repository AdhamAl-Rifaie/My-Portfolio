import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // Replace with your actual repo name
  server: {
    port: 5173,
    host: true,
    open: true
  }
})
