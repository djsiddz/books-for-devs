import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://djsiddz.github.io',
  base: '/books-for-devs',
  integrations: [mdx()]
});