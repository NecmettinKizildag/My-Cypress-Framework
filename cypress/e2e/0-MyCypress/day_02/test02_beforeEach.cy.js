describe('before each', () => {
    beforeEach(() => {
        cy.visit('http://www.google.com')    
    });

    it('title', () => {
        cy.title().should('eq','Google')
        cy.title().should('include','Google')
    });

    it('url test', () => {
        cy.url().should('include',"google.com")
    });
    
});