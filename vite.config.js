import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Project site: https://quanvo0112.github.io/my-portfolio/
// `base` MUST match the repo name (leading + trailing slash) or every
// JS/CSS/asset request 404s and the page renders blank.
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
