import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    }
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acesso de qualquer IP
    port: 3000, // Ou qualquer outra porta que você preferir
    strictPort: true, // Garante que a porta especificada seja usada
    hmr: {
      clientPort: 3000, // Define a porta do cliente para HMR
    },
  },
})
