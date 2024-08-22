const { defineConfig } = require("cypress");
//const mochawesome = require('cypress-mochawesome-reporter/plugin');
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  //projectId: "rrgoob",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //mochawesome(on);
      screenshotOnFailure = true;
      //allureWriter(on, config);
      return config;
    },
  },
  env:{
    dev: 'https://ecommerce-playground.lambdatest.io/',
    stage: 'https://ecommerce-playground.lambdatest.io/',
    // allureSkipAutomaticScreenshots : true,
    // allureAddVideoOnPass : true
  }
});
