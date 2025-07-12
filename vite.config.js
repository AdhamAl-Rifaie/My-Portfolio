import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-Portfolio/',  // Must match your repository name exactly
  plugins: [react()],
})