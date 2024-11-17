import LoginPage from '../PagesDemoblaze/LoginPage';
import CartPage from "../PagesDemoblaze/CartPage";

describe('Demoblaze Page', () => {

    it(' Add Product to Cart', () => {

    const loginPage = new LoginPage();
    const cartPage = new CartPage();

    loginPage.open();
    loginPage.login('test', 'test');
    loginPage.assertSuccessfulLogin()
    cartPage.alert()
    cartPage.addCart()
    cartPage.assertProductAddition()
    })
})
