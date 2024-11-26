class AddProductInCart {
    addToCart() {
        cy.contains('Add to cart').click();
        cy.contains('Added').should('be.visible');
    }

    viewCart() {
        //cy.get('a[href="/view cart"]').click()
        cy.contains('View Cart').click();
    }

}
export default AddProductInCart;