// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('login', (email, password) => {
    cy.intercept('POST', '**/login_by_credentials').as('loginSuccess')

    cy.visit(`${Cypress.env('BASE_URL')}/login`);
    cy.get('[name=email]:visible').click().type(email);
    cy.get('[name=password]:visible').click().type(password);
    cy.get('.js-login-button:visible').click();

    cy.wait('@loginSuccess').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    })
})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
