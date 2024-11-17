class HomePage {
    assertSuccessfulLogin(){
        cy.contains('Dashboard').should('be.visible');
    }

    myInfoButton() {
        cy.get('a[href="/web/index.php/pim/viewMyDetails"]').click()
    }
}
export default HomePage;
