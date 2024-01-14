///<reference types="Cypress" />

describe('CheckBox Methodlari', () => {
    it('Checkbox secimi', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')
    });

    it('israsina gore secme', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get("input[type='checkbox'").eq(0).check().should('be.checked')
        cy.wait(1000)
        cy.get("input[type='checkbox'").first().uncheck().should('not.be.checked') // first() = eq(0)

    });

    it.only('toplu secme', () => {
        cy.visit('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb')
        //cy.get("input[type='checkbox']").check() // secim yaptiktan sonra sayfa yenilendigi icin yenilenme esnasinda secim yapamiyor ve hata veriyor
        //cy.get("input[type='checkbox']").eq(11).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(16).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(24).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(35).check().should('be.checked')
    });
});