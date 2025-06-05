// @ts-check
import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify'


import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar:
  {
    enabled: false,
  },
  adapter: netlify(),
  base: ''
});