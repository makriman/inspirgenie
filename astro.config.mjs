// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://inspir.uk',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap(), mdx()],
  adapter: vercel(),
});
