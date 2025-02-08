import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      offwhite: "#FFFFF2"
    }
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
});
