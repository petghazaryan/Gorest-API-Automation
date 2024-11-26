class LogoutPage {
    logOutButton() {
        cy.get('a[href="/logout"]').click()
        cy.contains(' Signup / Login').should('be.visible')
    }


}
export default  LogoutPage