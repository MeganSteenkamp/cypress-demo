/// <reference types="cypress" />

context('Login', () => {
  
    it('Logs in using a Cypress command', () => {
      cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
    })
})