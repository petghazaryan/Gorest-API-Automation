class ViewCartPages {
    productQuantity() {
        cy.get('.disabled').should('have.text', '1')
            .and('be.visible');
    }
}
export default  ViewCartPages