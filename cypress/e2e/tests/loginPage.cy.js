import LoginPage from '../pages/loginPage'
import HomePage from "../pages/homePage";
import MyInfoPage from "../pages/myInfoPage";

describe('OrangeHRM', () => {

    it(' Login Page and Edit Personal details ', () => {
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        const myInfoPage = new MyInfoPage()

        loginPage.open()
        loginPage.login('Admin', 'admin123')
        loginPage.loginButton()
        homePage.assertSuccessfulLogin()
        homePage.myInfoButton()
        myInfoPage.addMyInfo()
        myInfoPage.saveButton()
        myInfoPage.assertSuccessMessage()
        myInfoPage.assertEditsVisible()
    })
})
