///<reference types="Cypress" />
describe('Hover', () => {
    it('', () => {
        cy.visit('https://www.amazon.com')
        cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')
        cy.contains('Change country/region.').click()
        cy.get('.a-dropdown-container > .a-button > .a-button-inner > .a-button-text').click()
        cy.get('#icp-dropdown_18').click()
        cy.get('.a-button-input').click()

    });

    it.only('', () => {
        cy.visit('https://www.amazon.com')
        cy.wait(4000)
        cy.reload() // sayfayi yenilerken cache den yukler
        cy.wait(4000)
        cy.reload(true) // sayfayi cache den yuklemez sifirdan yukler
    });
});