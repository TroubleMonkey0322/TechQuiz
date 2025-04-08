describe('Quiz E2E Test', () => {
    beforeEach(() => {
      cy.visit('/quiz') 
    })
  
    it('should display a question and options', () => {
      cy.get('h2').should('exist') 
      cy.get('button').should('have.length.greaterThan', 1) 
    })
  
    it('should allow selecting an answer', () => {
      cy.get('button').contains('Paris').click() 
      cy.get('button').should('be.disabled') 
    })
  
    it('should proceed to next question or show result', () => {
      cy.get('button').first().click()
      // Example: check for next question or score screen
      cy.get('h2').should('not.contain', 'What is the capital of France?')
    })
  })
  