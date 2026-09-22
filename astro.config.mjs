// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [keystatic(), markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});