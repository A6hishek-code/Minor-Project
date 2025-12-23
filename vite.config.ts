import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  base: '/', // ✅ use '/' for production with BrowserRouter
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});