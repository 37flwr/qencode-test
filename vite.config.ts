import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mixins": resolve(`src/styles/mixins.scss`),
      "@components": resolve(`src/components`),
      "@shared": resolve(`src/shared`),
      "@pages": resolve(`src/pages`),
    },
  },
});
