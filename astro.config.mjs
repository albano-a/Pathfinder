// @ts-check

import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
