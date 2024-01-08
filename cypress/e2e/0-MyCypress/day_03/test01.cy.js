describe('login', () => {
    beforeEach(() => {
        //cy.viewport(1920,1080)
        cy.visit('http://www.automationexercise.com')
    });
    it('Pozitif Login Testi', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('.login-form > h2').should('have.text','Login to your account')
        cy.get('.signup-form > h2').should('be.visible')
        cy.get('.signup-form > h2').should('have.text','New User Signup!')
    });
    it('giris', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type('babayigit@gmail.com')
        cy.get('[data-qa="login-password"]').type('123456')
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        cy.get(':nth-child(10) > a').should('have.text',' Logged in as baba')
    });

    it.only('negatif login', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type('babayigit@gmai.com')
        cy.get('[data-qa="login-password"]').type('12345')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('be.visible')
        cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
    });
});

/*
TEST - 1 Pozitif Login
1. http://www.automationexercise.com
2. Signup/Login sayfasina git
3. "Login to your account" yazisinin bulundugunu dogrula
4. "New User Signup!" yazisinin varligini dogrula
5. babayigit@gmail.com 123456 ile giris yap
6. giris yaptigini dogrula
7. cikis yap
8. cikis yaptigini dogrula

TEST - 2 Negatif Login
1. http://www.automationexercise.com
2. Signup/Login sayfasina git
3. baba71@gmail.com 123456 ile giris yap
4. giris yapilamadigini dogrula
*/