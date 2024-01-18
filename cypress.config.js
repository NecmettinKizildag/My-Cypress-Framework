const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl:'http://www.google.com',
    projectId: "zxdnib",
    "video":false, // video kaydi alinmasini engeller
    "retire":2 // fail olan testleri 2 kere daha calistirir

  },
});


 