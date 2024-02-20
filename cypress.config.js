const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://erp-homologacao.viasoft.com.br/',
    env: {
      hideXhr: true
    }
  },
});
