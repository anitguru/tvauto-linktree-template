import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    compress({
      gzip: true, // Ensure gzip is enabled
      brotli: true, // Optionally enable Brotli
      // You can add more options if needed
    }),
  ],
});
