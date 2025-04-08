const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001', 
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  component: {
    devServer: {
      framework: 'react',     
      bundler: 'vite',        
    },
    supportFile: 'cypress/support/component.js',
    setupNodeEvents(on, config) {
      // node events for component testing
    }
  }
})
