describe('Practice Form', () => {

    it(' Add user ', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.url().should('contain', 'demoqa');
        cy.get('#firstName').type('Test')
        cy.get('#lastName').type('Testyan')
        cy.get('#userEmail').type('test@test.com')
        cy.get('#gender-radio-1').check({force: true})
        cy.get('#userNumber').type('0123456789');
        cy.get('#hobbies-checkbox-3').check({force: true});
        cy.get('#currentAddress').type('USA');
        cy.get('#submit').click();
        cy.get('#example-modal-sizes-title-lg')
            .should('contain', 'Thanks for submitting the form');
        cy.get('#closeLargeModal').click({force: true});
        cy.get('.text-center').should('contain', 'Practice Form');
    });
});
