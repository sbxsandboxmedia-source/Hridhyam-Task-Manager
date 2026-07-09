import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT for GitHub Pages repo URL:
// https://USERNAME.github.io/Hridhyam-Task-Manager/
export default defineConfig({
  plugins: [react()],
  base: '/Hridhyam-Task-Manager/'
});
