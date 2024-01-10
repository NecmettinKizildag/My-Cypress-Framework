///<reference types="Cypress" />
describe('Hover', () => {
    it('', () => {
        cy.visit('https://www.amazon.com')
        cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')
        cy.contains('Change country/region.').click()
    });
});