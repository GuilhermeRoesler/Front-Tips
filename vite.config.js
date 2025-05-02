import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
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
