describe('go komutu kullanimi', () => {
    it('', () => {
        cy.visit('/');
        cy.get('#L2AGLb > .QS5gu').click()

        cy.get('#APjFqb').type('Fizikci{enter}')
        cy.wait(1000)
        cy.go('back') // cy.go('-1')  alternatif
        cy.wait(1000)
        cy.go('forward') // cy.go('1')  alternatif
        cy.wait(1000)
        cy.reload()
    });
});