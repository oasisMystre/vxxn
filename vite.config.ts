import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), UnoCSS()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
