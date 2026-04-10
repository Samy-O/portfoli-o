import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    mdx(),   // MDX files will be treated as React components
    react(),
  ],
})
