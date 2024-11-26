class loginBeforeCheckout {
    login() {
        cy.contains('Register / Login').click({ force: true });
        cy.contains(' Signup / Login').click({force: true});
        cy.get('[data-qa="login-password"]').type('test123');

    }
    fillEmail(email) {
        cy.get('[data-qa="login-email"]').clear().type(email);
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Test').should('be.visible');
        cy.contains(' Cart').click()
    }
}
export default loginBeforeCheckout;
