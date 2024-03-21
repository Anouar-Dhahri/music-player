import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginRequire from "vite-plugin-require";
import checker from "vite-plugin-checker";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginRequire.default(),
    checker({
      // e.g. use TypeScript check
      typescript: false,
    }),
  ],
});
