// cypress/component/Quiz.cy.jsx
import React from 'react'
import Quiz from '../../src/components/Quiz'

describe('<Quiz />', () => {
  it('renders question and options', () => {
    const question = "What is the capital of France?"
    const options = ["Paris", "Berlin", "Madrid"]

    cy.mount(
      <Quiz question={question} options={options} onAnswer={cy.stub()} />
    )

    cy.contains(question)
    options.forEach(option => {
      cy.contains(option)
    })
  })

  it('calls onAnswer when an option is clicked', () => {
    const question = "What is 2 + 2?"
    const options = ["3", "4", "5"]
    const onAnswer = cy.stub().as('onAnswer')

    cy.mount(
      <Quiz question={question} options={options} onAnswer={onAnswer} />
    )

    cy.contains('4').click()
    cy.get('@onAnswer').should('have.been.calledWith', '4')
  })
})
