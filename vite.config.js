import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vegan/', // <- Important! Matches your GitHub repo name
  plugins: [react()],
});
