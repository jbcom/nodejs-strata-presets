import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'tests/e2e/viewer'),
  resolve: {
    alias: {
      '@strata-game-library/presets': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
  },
});
