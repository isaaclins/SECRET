import { defineConfig } from "cypress";

export default defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // Node-Event-Listener hier einrichten
    },
    baseUrl: "http://localhost:3000",
    supportFile: false, // Diese Zeile hinzufügen
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});