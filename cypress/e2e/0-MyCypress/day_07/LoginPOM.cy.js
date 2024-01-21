import HomePage from "../../POM/LoanTechExper/Home.cy";
import LoginPage from "../../POM/LoanTechExper/LoginPage.cy";
describe('POM ile Login', () => {
    it('login test', () => {
        const homePage = new HomePage()
        const loginPage = new LoginPage()

        homePage.getVisit()
        homePage.getLoginButton().click()
        loginPage.getNameTextBox().type('necmettin')
        loginPage.getPasswordTextBox().type('Loan.741')
        loginPage.getLoginButton().click()

    });
});