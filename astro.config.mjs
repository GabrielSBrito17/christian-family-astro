// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [keystatic(), markdoc()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'hybrid',
});