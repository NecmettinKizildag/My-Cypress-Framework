///<reference types="Cypress" />

describe('Super Domain', () => {
    it('Ayni class da iki farkli visit', () => {
        cy.visit('https://www.amazon.com')
    });
});