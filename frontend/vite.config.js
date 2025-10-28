import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { SitemapPlugin } from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      baseUrl: 'https://ajain.live',
      routes: [
        '/', '/projects', '/about', '/contact'
      ]
    })
  ]
});
