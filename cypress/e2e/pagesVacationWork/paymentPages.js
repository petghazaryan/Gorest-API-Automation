class PaymentPage {
    cardDetails() {
        cy.get('[name="name_on_card"]').type('Test Testyan')
        cy.get('[name="card_number"]').type('1111222233334444')
        cy.get('[name="cvc"]').type('147')
        cy.get('[name="expiry_month"]').type('12')
        cy.get('[name="expiry_year"]').type('2024')
    }

    payButton() {
        cy.get('#submit').click()
        cy.contains('Congratulations! Your order has been confirmed!')
            .should('be.visible')
    }
}
export default  PaymentPage
