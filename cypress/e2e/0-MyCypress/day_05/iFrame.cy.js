describe('iFrame', () => {
    it('iFrame test', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');
        
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe().find('p').clear()
        cy.iframe().find('p').type('hello world')
        cy.iframe().find('p').should('have.text','hello world')

        //cy.screenshot()

        cy.get('.large-4 > div > a').click()
        
    });
});