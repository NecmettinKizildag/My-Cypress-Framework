describe('Custom Commands', () => {
    it.skip('Pozitive Login Test', () => {
        cy.visit('https://qa.loantechexper.com/');
        cy.get('.d-none > .btn').click();
        cy.get('.cookies-card__btn > .btn').click();
        cy.get('.auth-form__content > .mt-0').scrollIntoView();
        cy.get('#username').type('necmettin')
        cy.get('#password').type('Loan.741')   
        cy.get(':nth-child(5) > .btn').click()
    });

    it('Komut ile pozitif login testi', () => {
        cy.LoanExperUserLogin('necmettin','Loan.741');
    });

    it('Komut ile negatif login testi', () => {
        cy.LoanExperUserLogin('necmettinq','Loan.741');
    });
});