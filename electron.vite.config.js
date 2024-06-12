import { defineConfig } from "electron-vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  publicDir: "public",
  main: {},
  preload: {},
  renderer: {
    plugins: [react()],
  },
});
