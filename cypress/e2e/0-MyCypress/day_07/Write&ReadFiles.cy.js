describe('Write and Read Files', () => {
    it('write files', () => {
        cy.writeFile('C:/Users/necme/My_Cypress_Framework/cypress/fixtures/ornek.txt','{\n\t"userName":"necmettin",\n')
        cy.writeFile('C:/Users/necme/My_Cypress_Framework/cypress/fixtures/ornek.txt','\t"password":"Loan.741"\n}',{flag:'a+'})
    });

    it.only('Read file', () => {
        cy.readFile('C:/Users/necme/My_Cypress_Framework/cypress/fixtures/ornek.txt').should('contain','userName')
    });
});