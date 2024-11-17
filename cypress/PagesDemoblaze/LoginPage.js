class LoginPage {
    elements ={
        loginField: '#login2' ,
        usernameField: '#loginusername' ,
        passwordField: '#loginpassword' ,
        loginButton: '[onclick="logIn()"]',
}

    open(){
        cy.visit('https://demoblaze.com/index.html');
    }

    typeText(selector, text) {
        cy.get(selector).type(text)
    }

    clickButton(selector) {
        cy.get(selector).click()
    }

    login(username, password){
        this.clickButton(this.elements.loginField)
        cy.wait(500)
        this.typeText(this.elements.usernameField,password)
        cy.wait(500)
        this.typeText(this.elements.passwordField,password)
        this.clickButton(this.elements.loginButton)
    }

    assertSuccessfulLogin(){
        cy.contains('Welcome test').should('be.visible');
        cy.contains('Log out').should('be.visible');
        cy.get('[onclick="logIn()"]').should('not.be.visible');
    }
}
export default LoginPage;
