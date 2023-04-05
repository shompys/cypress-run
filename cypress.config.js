const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "http://localhost:8080/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    screenshotOnRunFailure: false,
    excludeSpecPattern: [
        '**/1-getting-started/*.js',
        '**/2-advanced-examples/*.js'
    ],
  },
});
