// cypress/integration/sample_spec.js
describe('My First Test', () => {
    it('Visits the app', () => {
      cy.visit('/')
      cy.contains('SUBMIT')
    })
  })