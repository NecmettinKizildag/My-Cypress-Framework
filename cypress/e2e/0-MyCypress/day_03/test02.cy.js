describe('locate almada fonksiyon islemi', () => {
    it('', () => {
        cy.visit('http://www.automationexercise.com')
         cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        // 1. yol
        cy.get('.login-form > h2').should('have.text','Login to your account')

        // 2. yol
        cy.get('.login-form > h2').then(textcontrol =>(
            expect(textcontrol.text()).to.contains('Login')
        ))

        // 3. yol
        cy.findByText('Login to your account').should('exist')
    });


});