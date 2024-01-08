

describe('Temel Cypress Komutlari', () => {
    it('cy.visit komutu', () => {
        cy.visit('/')
       cy.visit('http://www.amazon.com') // baseurl tanimli segilse
       cy.visit('/about-us')
    });

    it('cy.visit komutu.2', () => {
        cy.visit('/about-us')
    });

    it('cy.title komutu', () => {
        cy.visit('/')
        cy.title().should('eq','IT Bootcamp Courses, Online Classes - Wise Quarter Course')
        cy.title().should('include','Online')
        cy.title().should('contains','Classes')
    });

    it.only('cy.url ve cy.location', () => {
        cy.visit('/')
        cy.url().should('eq','https://wisequarter.com/')
        cy.url().should('include','wisequarter')

    });
}); 