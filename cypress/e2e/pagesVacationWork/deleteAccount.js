class deleteMyAccount {
    deleteAccount() {
        cy.contains('Delete Account').click();
        cy.contains('Your account has been permanently deleted!')
            .should('be.visible');
    }
}
export default deleteMyAccount;
