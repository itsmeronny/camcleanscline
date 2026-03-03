import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://camcleans.co.uk",
  integrations: [sitemap()],
});