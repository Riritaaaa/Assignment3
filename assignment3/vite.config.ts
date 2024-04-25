import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styleui": path.resolve(__dirname, "src/styleui"),
      "@tailwindworkshop": path.resolve(__dirname, "src/tailwindworkshop"),
      "@antframework": path.resolve(__dirname, "src/antframework"),
      "@globalredux": path.resolve(__dirname, "src/globalredux"),
      "@store": path.resolve(__dirname, "src/store"),
    },
    extensions: ['.ts', '.tsx', '.js']
  },

  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }

  }


})
