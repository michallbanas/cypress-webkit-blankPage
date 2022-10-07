const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://michalbanas.dev",
    experimentalWebKitSupport: true,
  },
});
