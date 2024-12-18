import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://ksanjeev284.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: '_astro'
  }
});