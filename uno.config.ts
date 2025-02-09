import { defineConfig, transformerDirectives } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      offwhite: "#FFFFF2",
      tan: "#2e2e2e",
      tanblack: "#1e1e1e",
    },
  },
  rules: [
    [
      "scrollbar-none",
      {
        "&::webkit-scrollbar": "display: none;",
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
    ],
  ],
  transformers: [transformerDirectives()],
});
