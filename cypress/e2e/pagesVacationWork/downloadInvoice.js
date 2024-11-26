class DownloadInvoice{
    downloadInvoiceButton(){
        cy.contains('Download Invoice').click();
        cy.wait(2000)
        const downloadFolder = 'cypress/downloads';
        const invoiceFileName = 'invoice.txt';
        cy.readFile(`${downloadFolder}/${invoiceFileName}`, {timeout: 10000})
            .should('exist')
        cy.readFile(`${downloadFolder}/${invoiceFileName}`, "binary")
            .should('not.be.empty')
        cy.get('[data-qa="continue-button"]').click();
        cy.contains('Home').should('be.visible');
    }


}
export default DownloadInvoice;