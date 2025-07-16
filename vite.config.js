import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path when served in production
  base: './',
  
  // Configure the build output directory
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        reviews: 'reviews.html',
        tips: 'tips.html',
        responsibleGaming: 'responsible-gaming.html',
        privacyPolicy: 'privacy-policy.html',
        cookiePolicy: 'cookie-policy.html',
      },
    },
  },
  
  // Server options
  server: {
    open: 'index.html',
    port: 3000,
  },
});