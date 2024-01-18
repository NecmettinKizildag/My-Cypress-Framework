import HomePage from "../../POM/LoanTechExper/Home.cy";
import LoginPage from "../../POM/LoanTechExper/LoginPage.cy";
describe('POM ile Login', () => {
    it('login test', () => {
        const homePage = new HomePage()
        const loginPage = new LoginPage()

        cy.visit('https://qa.loantechexper.com/');

        homePage.getLoginButton().click()
        loginPage.getNameTextBox().type()
    });
});