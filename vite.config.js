import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/SP-Dashboard",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@tests": path.resolve(__dirname, "./tests")
    }
  }
})
