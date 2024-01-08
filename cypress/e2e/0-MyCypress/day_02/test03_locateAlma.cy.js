 describe('locate alma', () => {
    it('cy.get komutu', () => {
        cy.visit('/')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').type('cypress{enter}')
        
    });
 });

 // xpath --> //input[@id='APjFqb']   ///   cy.get('//input[@id="APjFqb"]')

 // cy.get() komutunda id aliniyorsa cy.get('@id[APjFqb]') yerine cy.get('#APjFqb') kullanilir 
 // yani id yerine # kullanilir 
 // class almissak class yerine . kullanilir 