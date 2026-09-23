// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

/**
 * Public origin for this ops site. Leave empty until a host serves these pages.
 * https://inspir.uk is a different product (AI learning tools).
 * https://inspirops.vercel.app returns Vercel DEPLOYMENT_NOT_FOUND.
 * When this is set, canonicals, Open Graph URLs, and the sitemap use it.
 * @type {string}
 */
const site = '';

export default defineConfig({
  ...(site ? { site } : {}),
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [...(site ? [sitemap()] : []), mdx()],
});
