// before - after islemleri
describe('', () => {
    before(() => { // test basinda bir defa calisir
        cy.visit('/')
        cy.get('#L2AGLb > .QS5gu').click()
    });

    after(() => { // tum tester bittikten sonra calisir
        cy.log('tum tesler bitti');
    });

    
    
    beforeEach(() => { // her bir testin baslamadan once calisir
        cy.log('yeni test');
    });

    afterEach(() => { // her bir test bittikten sonra calisir
        cy.log('bu test bitti')
    });

    it('google da 3 idiots aratma', () => {
        
        cy.get('#APjFqb').type('3 idiots{enter}')
        cy.wait(1000)
        //cy.url().should('include','idiots')
    });

    it('google da Saving Private Ryan aratmak', () => {
        
        cy.get('#APjFqb').type('Saving Private Ryan{enter}')
    });;
}); 