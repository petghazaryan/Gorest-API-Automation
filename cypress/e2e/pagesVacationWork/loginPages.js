class LoginPage {
    fillUserName() {
        cy.get('input[name="name"]').type('Test');
    }

    fillEmail(email) {
        cy.get('[data-qa="signup-email"]').type(email);
    }

    open() {
        cy.visit(' https://automationexercise.com/')
    }

    signUpLoginButton(selector) {
        cy.get('a[href="/login"]').click()
    }

    signUpButton(selector) {
        cy.get('[data-qa="signup-button"]').click()
    }

    accauntInfo(password,firstname,lastname,address1,state,city,zipcode,mobile) {
        cy.get('#id_gender1').check()
        cy.get('#password').type(password)
        cy.get('#days').select('1')
        cy.get('#months').select('1')
        cy.get('#years').select('2001')
        cy.get('#first_name').type(firstname)
        cy.get('#last_name').type(lastname)
        cy.get('#address1').type(address1)
        cy.get('#country').select('United States')
        cy.get('#state').type(state)
        cy.get('#city').type(city)
        cy.get('#zipcode').type(zipcode)
        cy.get('#mobile_number').type(mobile)
    }

    createAccountButton() {
        cy.get('[data-qa="create-account"]').click()

    }

    accountsuccessfulcreated() {
        cy.get('[data-qa="account-created"]')
            .should('contain', 'Account Created')
    }

    continueButton() {
     cy.get('[data-qa="continue-button"]').click()
    }
}
export default LoginPage
