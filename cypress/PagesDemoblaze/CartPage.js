class CartPage {
    elements = {
        chooseProductButton: 'a.hrefch[href*="prod.html?idp_=9"]',
        addCartButton: '.btn.btn-success.btn-lg',
        checkCartButton: '#cartur',
    }

    alert(){
        cy.on('window:alert', (text)=>{
            expect(text).to.equal('Product added.');
        })
    }

    clickButton(selector) {
        cy.get(selector).click()
    }

    addCart() {
        this.clickButton(this.elements.chooseProductButton)
        this.clickButton(this.elements.addCartButton)
        this.clickButton(this.elements.checkCartButton)
    }

    assertProductAddition(){
        cy.contains('Products').should('be.visible');
        cy.contains('Sony vaio i7').should('be.visible');
        cy.contains('Place Order').should('be.visible');
    }
}
export default CartPage
