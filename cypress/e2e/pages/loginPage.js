class LoginPage {
    elements  =  {
        usernameField: '[name="username"]',
        passwordField: '[name="password"]',
    }

    open() {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    }

    typeText(selector, text) {
        cy.get(selector).type(text)
    }

    loginButton(selector) {
        cy.get('[class*="login-button"]').click()
    }

    login(username, password) {
        this.typeText(this.elements.usernameField,username)
        this.typeText(this.elements.passwordField,password)
    }
}
export default LoginPage;
