class HomePage {
    productsPage(selector) {
        cy.get('a[href="/products"]').click()
    }

    searchProducts(selector) {
        cy.get('[name="search"]').type('Jeans')
    }

    productSearchingButton(selector) {
        cy.get('[type="button"]').click()
        cy.contains('Soft Stretch Jeans').should('be.visible')
    }




}
export default HomePage;
