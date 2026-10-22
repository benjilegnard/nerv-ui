import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "NERV-UI",
    brandImage: "./nerv-ui-logo-full.png",
    brandTarget: "_self",
  }),
});
