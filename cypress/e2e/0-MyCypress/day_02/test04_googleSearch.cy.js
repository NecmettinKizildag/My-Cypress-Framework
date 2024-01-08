describe('google search', () => {

    beforeEach(() => {
        cy.visit('/')    
    });

    it('google da 3 idiots aratma', () => {
        cy.get('#L2AGLb > .QS5gu').click() // cookies kabul etme
        cy.get('#APjFqb').type('3 idiots{enter}')
        cy.wait(1000)
        //cy.url().should('include','idiots')
    });

    it('google da Saving Private Ryan aratmak', () => {
        cy.get('#L2AGLb > .QS5gu').click() // cookies kabul etme
        cy.get('#APjFqb').type('Saving Private Ryan{enter}')
    });
});