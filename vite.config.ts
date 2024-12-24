import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      treeshake: true,
      output: {
        entryFileNames: `assets/index.js`,
        chunkFileNames: `assets/index-chunk.js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
