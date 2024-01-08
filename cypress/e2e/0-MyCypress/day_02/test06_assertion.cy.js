describe('', () => {
    it('login testi', () => {
        cy.visit('https://qa.loantechexper.com/')

        // assertion
        // 1. have-text
        cy.get('.navbar-nav > :nth-child(5) > .nav-link').should('have.text','Contact')

        // 2. cy.url().should()
        cy.url().should('include','loan')

        // 3. cy.title().should()
        cy.get('.d-none > .btn').click()
        cy.title().should('eq','Loantech Exper - Login')

        // 4. be.visible
        cy.get('.hero__content-title').should('be.visible')

        // 5. iclude text
        cy.get('.d-none > .btn').should('include.text','Login')

    });
});