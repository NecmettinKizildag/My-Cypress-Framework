class HomePage{
    getLoginButton(){
        return cy.get('.d-none > .btn');
    }

    getVisit(){
        return cy.visit('https://qa.loantechexper.com/');
    }
}
export default HomePage