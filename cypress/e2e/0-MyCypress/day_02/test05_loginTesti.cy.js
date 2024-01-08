describe('login testi', () => {
    beforeEach(() => {
        cy.visit('https://qa.loantechexper.com/')
    });
    it('', () => {
        cy.get('.d-none > .btn').should('be.visible')
        cy.get('.d-none > .btn').click()
        cy.get('#username').type('necmettin')
        cy.get('#password').type('Loan.741')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('.link').should("be.visible")
    });
});