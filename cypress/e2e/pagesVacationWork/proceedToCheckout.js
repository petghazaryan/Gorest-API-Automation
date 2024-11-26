class proceedToCheckout {
    proceedToCheckoutButton() {
         cy.get('[class*="btn btn-default check_out"]')
             .click({force: true});

     }

    placeOrderButton() {
         cy.get('a[href="/payment"]').click();

    }
 }
 export default proceedToCheckout
