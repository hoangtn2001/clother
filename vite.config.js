import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
       "@pages": path.resolve(__dirname, "src/components/Pages"),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Thêm cấu hình này để alias được áp dụng trong SCSS
        includePaths: [path.resolve(__dirname, 'src/assets/styles')],
      },
    },
  },
})
