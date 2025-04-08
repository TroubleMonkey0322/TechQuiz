import './commands'
import { mount } from 'cypress/react'

// Make mount globally available
Cypress.Commands.add('mount', mount)

describe('MyComponent', () => {
    it('renders correctly', () => {
      cy.mount(<MyComponent />)
      cy.contains('Hello World')
    })
  })
  