import { defineConfig } from "vite"
import path from 'path'

const assetsDir = '';
const outputDefaults = {
  // remove hashes from filenames
  entryFileNames: `${assetsDir}[name].js`,
  chunkFileNames: `${assetsDir}[name].js`,
  assetFileNames: `${assetsDir}[name].[ext]`,
}

export default defineConfig({
  base: "./",
  clearScreen: false,
  build: {
    outDir: path.resolve('../docs'),
    emptyOutDir: true,
    target: 'esnext',
    minify: false,
    rollupOptions: {
      output: {
        ...outputDefaults,
      }
    },
  },
})
