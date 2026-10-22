import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // dist/ is the library output (tsdown), the demo app builds next to it.
  build: { outDir: "dist-app" },
});
