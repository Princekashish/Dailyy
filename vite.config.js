import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "masked-icon.png", "apple-touch-icon.png"],
      manifest: {
        name: "Dailyy in Minutes",
        short_name: "Dailyy",
        description: "Dailyy Grocery store",
        theme_color: "#17803D",
        background_color: "#17803D",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/maskable_icon_180x180.png",
            sizes: "180x180",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true, // Enable PWA in development for testing
        type: "module", // Use ES modules for service worker
      },
    }),
  ],
});
