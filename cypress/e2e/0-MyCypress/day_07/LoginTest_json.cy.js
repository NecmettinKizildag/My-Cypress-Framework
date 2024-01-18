describe('Json ile login test', () => {
    before(function(){
        cy.fixture('loantechexper.json').as('loantechexper')
    })
    it('login', () => {
        cy.visit(this.data.url)
        cy.get('.d-none > .btn').click()

    });
});