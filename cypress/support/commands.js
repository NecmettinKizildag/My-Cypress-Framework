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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('LoanExperUserLogin',(username,password) => {
    cy.visit('https://qa.loantechexper.com/');
        cy.get('.d-none > .btn').click();
        cy.get('.cookies-card__btn > .btn').click();
        cy.get('.auth-form__content > .mt-0').scrollIntoView();
        cy.get('#username').type(username)
        cy.get('#password').type(password)   
        cy.get(':nth-child(5) > .btn').click()
})


Cypress.Commands.add('AmazonSearch',(productName)=>{
    cy.visit('https://www.amazon.com');
    cy.get('#twotabsearchtextbox').type(productName)
    cy.get('#nav-search-submit-button').click()
    cy.get('#twotabsearchtextbox').should('have.value',productName)
    cy.get('.a-color-state').should('contain.text',productName)
})
