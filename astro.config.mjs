import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://just-a-pretty-website.vercel.app',
  integrations: [sitemap()]
});
