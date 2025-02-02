import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Port-folio/",
  assetsInclude:['**/*.JPG'],
  root: './', // Ensure this is the correct path if you're not using the default project structure
  build: {
    outDir: 'dist',
  } 
})
