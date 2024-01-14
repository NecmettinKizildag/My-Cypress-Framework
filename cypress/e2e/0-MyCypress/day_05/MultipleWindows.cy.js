describe('Multiple windows', () => {
    it('Attribute remove', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')
        cy.get('h3').should('have.text','New Window')
    });

    it.skip('New URL', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example > a').then((element) =>{
            const newUrl = element.prop('href')
            cy.visit('newUrl');
        })
    });
});