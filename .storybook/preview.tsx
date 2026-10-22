import type { Preview } from "@storybook/react-vite";
import { GLOBALS_UPDATED, SET_GLOBALS } from "storybook/internal/core-events";
import { addons } from "storybook/preview-api";
import "../src/lib/styles/tokens.css";
import embeddedFonts from "../src/lib/styles/fonts.embedded.css?inline";
import googleFonts from "../src/lib/styles/fonts.google.css?inline";

type FontSource = "embedded" | "google";

// Font CSS is injected in a single <style> so it can be swapped from the
// toolbar. Done through the channel rather than a decorator so it also applies
// to MDX docs pages, which don't run decorators.
function applyFonts(source: FontSource = "embedded") {
  let style = document.getElementById("nerv-fonts");
  if (!style) {
    style = document.createElement("style");
    style.id = "nerv-fonts";
    document.head.prepend(style);
  }
  const css = source === "google" ? googleFonts : embeddedFonts;
  if (style.textContent !== css) style.textContent = css;
}

const channel = addons.getChannel();
for (const event of [SET_GLOBALS, GLOBALS_UPDATED]) {
  channel.on(event, ({ globals }: { globals: { fonts?: FontSource } }) =>
    applyFonts(globals.fonts),
  );
}
applyFonts();

const preview: Preview = {
  globalTypes: {
    fonts: {
      description: "Font source",
      toolbar: {
        title: "Fonts",
        icon: "paragraph",
        items: [
          { value: "embedded", title: "Embedded (self-hosted)" },
          { value: "google", title: "Google Fonts CDN" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    fonts: "embedded",
    backgrounds: { value: "nerv" },
  },
  parameters: {
    backgrounds: {
      options: {
        nerv: { name: "NERV black", value: "#000000" },
        alert: { name: "Alert red", value: "#c50e08" },
        light: { name: "Light", value: "#f2f2f2" },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
