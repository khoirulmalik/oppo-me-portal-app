import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
module.exports defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5172,
    open: true
  }
})
