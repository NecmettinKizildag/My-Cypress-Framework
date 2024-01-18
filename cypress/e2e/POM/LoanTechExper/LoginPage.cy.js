class LoginPage{
    getNameTextBox(){
        return cy.get('#username')
    }

    getPasswordTextBox(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get(':nth-child(5) > .btn')
    }
}
export default LoginPage