import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'


export default defineConfig({
  plugins: [
    tailwindcss(),
    autoprefixer,
  ],
})
