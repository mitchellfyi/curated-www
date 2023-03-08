import { defineConfig } from "vite";
import { resolve } from "path";
import autoprefixer from "autoprefixer";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
