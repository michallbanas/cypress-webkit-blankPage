const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://michalbanas.dev",
    experimentalWebKitSupport: true,
  },
});
