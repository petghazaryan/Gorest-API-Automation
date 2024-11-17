class MyInfoPage {
addMyInfo() {
    cy.get('[name="firstName"]').clear()
        .type('Test')
    cy.get('[name="lastName"]').clear()
        .type('Testyan')
    }

    saveButton() {
        cy.get('button[data-v-10d463b7][data-v-6653c066]').click();
    }

    assertSuccessMessage() {
        cy.on('window:alert', (text)=>{
        expect(text).to.equal('Successfully Updated.');
        })
    }

    assertEditsVisible() {
        cy.get('[name="firstName"]')
            .should("be.visible")
            .and("have.value",'Test');
        cy.get('[name="lastName"]')
            .should("be.visible")
            .and("have.value","Testyan");
    }
}
export default MyInfoPage;
