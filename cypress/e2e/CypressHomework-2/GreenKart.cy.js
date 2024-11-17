describe('Green Kart', () => {

    it(' Search Brocolli ', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('[class*=search-keyword]').type('Brocolli');
        cy.get('[class*=search-button]').click();
        cy.get('.products .product:nth-child(1)')
            .should('be.visible');
        cy.get('[class*=quantity]')
            .should('have.value', '1');
        cy.get('[class*=increment]').dblclick()
        cy.get('[class*=quantity]')
            .should('have.value', '3');
        cy.contains('button', 'ADD TO CART')
            .click();
        cy.contains('button', 'ADDED')
            .click();
        cy.get('a.cart-icon').click()
        cy.get('[class*="cart-preview active"] ul li')
            .should('be.visible')
        cy.contains('button', 'PROCEED TO CHECKOUT')
            .click();
        cy.get('p.product-name').should('be.visible')
        cy.get('.promoCode').type('test')
        cy.contains('button', 'Apply').click()
        cy.wait(6000)
        cy.get('.promoInfo')
            .should('contain', 'Invalid code ..!')
        cy.contains('button', 'Place Order').click();
        cy.get('select[style="width: 200px;"]')
            .select('Argentina')
        cy.get('.chkAgree').check()
        cy.contains('button', 'Proceed').click();
        cy.contains('Thank you, your order has been placed successfully')
            .should('be.visible');
    })
})
