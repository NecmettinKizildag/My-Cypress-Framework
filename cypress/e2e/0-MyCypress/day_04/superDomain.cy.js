///<reference types="Cypress" />

describe('Super Domain', () => {
    it('Ayni class da iki farkli visit', () => {
        cy.visit('https://www.amazon.com')

        //cy.visit('https://www.google.com');
        // ayni it blogunun icinde birbirinden bagimsiz iki farkli domaine erisim yaparsan hata verir
    });
});