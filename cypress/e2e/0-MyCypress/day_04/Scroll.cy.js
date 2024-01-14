///<reference types="Cypress" />

describe('scroll islemleri', () => {
    it('sayfayi belirli bir yere kaydirma', () => {
        cy.visit('https://www.tripandway.com/');
        cy.get('.portfolio-page > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView({duration : 1000}) // 1 saniyede sonra elemente git
        cy.wait(1000)
        cy.get('.featured-package > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView()

    });

    it('istedigimiz koordinata kaydirma', () => {
        cy.visit('https://www.tripandway.com/');
        cy.get('.col > .main-headline > .headline > h2').scrollIntoView()
        cy.wait(1000)
        cy.scrollTo(0,1) 
        cy.get('.blog-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView()
        cy.wait(1000)
        cy.scrollTo(0,500)
        cy.wait(1000)
        cy.scrollTo(0,-500)
    });

    it.only('koordinatla gitme', () => {
        cy.visit('https://www.tripandway.com/');
        cy.get('.team-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView({top:300})
    });
});