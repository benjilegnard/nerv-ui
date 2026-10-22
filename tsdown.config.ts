import { defineConfig } from "tsdown";

// Library build: JS entry + .d.ts, and the raw CSS/fonts copied as-is.
// @fontsource imports in the CSS are left to the consumer's bundler.
export default defineConfig({
  entry: ["src/lib/index.ts"],
  outDir: "dist",
  platform: "browser",
  format: "esm",
  tsconfig: "tsconfig.app.json",
  dts: true,
  copy: ["src/lib/styles", "src/lib/fonts"],
});
