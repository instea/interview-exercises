import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: process.env.SANDBOX_URL
    ? {
        hmr: {
          clientPort: 443,
        },
      }
    : {},
});
