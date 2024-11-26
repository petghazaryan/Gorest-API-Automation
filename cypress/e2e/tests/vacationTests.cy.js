import loginPages from "../pagesVacationWork/loginPages";
import logoutPages from "../pagesVacationWork/logoutPages";
import homePages from "../pagesVacationWork/homePages";
import viewCartPages from "../pagesVacationWork/viewCartPages";
import AddProductInCart from "../pagesVacationWork/addProductInCart";
import LoginBeforeCheckout from "../pagesVacationWork/loginBeforeCheckout";
import ProceedToCheckout from "../pagesVacationWork/proceedToCheckout";
import PaymentPage from "../pagesVacationWork/paymentPages";
import DownloadInvoice from "../pagesVacationWork/downloadInvoice";
import DeleteAccount from "../pagesVacationWork/deleteAccount";

describe('Automation Exercise', () => {
    let randomEmail;

    before(() => {
        randomEmail = `user${Cypress._.random(1000, 9999)}@example.com`;
        cy.log('Generated Email:', randomEmail);
    });

     it(' All In One', () => {
         const loginPage = new loginPages();
         const logoutPage = new logoutPages();
         const homePage = new homePages();
         const addProductInCart = new AddProductInCart();
         const viewCartPage = new viewCartPages();
         const loginBeforeCheckout = new LoginBeforeCheckout();
         const proceedToCheckout = new ProceedToCheckout();
         const paymentPage = new PaymentPage();
         const downloadInvoice = new DownloadInvoice();
         const deleteAccount = new DeleteAccount();

         loginPage.open()
         loginPage.signUpLoginButton()
         loginPage.fillUserName()
         loginPage.fillEmail(randomEmail)
         loginPage.signUpButton()
         loginPage.accauntInfo('test123', 'Test',
             'Testyan', 'US',
             'USA', 'LOS', '000', '123456789')
         loginPage.createAccountButton()
         loginPage.accountsuccessfulcreated()
         loginPage.continueButton()
         logoutPage.logOutButton()
         homePage.productsPage()
         homePage.searchProducts()
         homePage.productSearchingButton()
         addProductInCart.addToCart()
         addProductInCart.viewCart()
         viewCartPage.productQuantity()
         loginBeforeCheckout.login()
         loginBeforeCheckout.fillEmail(randomEmail)
         proceedToCheckout.proceedToCheckoutButton()
         proceedToCheckout.placeOrderButton()
         paymentPage.cardDetails()
         paymentPage.payButton()
         downloadInvoice.downloadInvoiceButton()
         deleteAccount.deleteAccount()
     })

})
