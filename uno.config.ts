import {
  defineConfig,
  transformerDirectives,
  presetWebFonts,
  presetUno,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      offwhite: "#FFFFF2",
      tan: "#2e2e2e",
      tanblack: "#1e1e1e",
    },
  },
 
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Open Sans",
      },
    }),
  ],
  transformers: [transformerDirectives()],
});
