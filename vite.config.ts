import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react';
import pluginChecker from 'vite-plugin-checker';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      pluginChecker({ typescript: true }),
      splitVendorChunkPlugin(),
  ],
  server: {
    open: true,
    hmr: {
        overlay: true,
      },
    },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
