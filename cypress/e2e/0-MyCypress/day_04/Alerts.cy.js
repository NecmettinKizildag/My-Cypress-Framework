///<reference types="Cypress" />

describe('JS Alert', () => {
    it('Click', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(':nth-child(1) > button').click() // cypress default olarak alert in ustundeki okey butonuna tiklar
        cy.get('#result').should('have.text','You successfully clicked an alert')
    });

    it('Confirm', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(':nth-child(2) > button').click() // cypress default olarak alert in ustundeki okey butonuna tiklar
        cy.get('#result').should('have.text','You clicked: Ok')
    });

    it('Dismiss', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(':nth-child(2) > button').click()

        cy.on('window:confirm', ()=>{ // on() JQurery den gelen bir method. Browser daki pencerelerin kontrolunu saglar
            return false;
        })

        cy.get('#result').should('have.text','You clicked: Cancel')
    });

    it.only('Promp Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        

        cy.window().then(win =>{
            cy.stub(win,'prompt').returns('Wise');
        })

        cy.get(':nth-child(3) > button').click()
        cy.get('#result').should('have.text','You entered: Wise')
    });
});