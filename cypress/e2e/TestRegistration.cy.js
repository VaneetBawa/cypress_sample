
import { RegisterPage } from "../pageObjects/RegisterPage"
import { LoginPage } from "../pageObjects/LoginPage"
import { ProductPage } from "../pageObjects/ProductPage"
import { CheckOutPage } from "../pageObjects/CheckOutPage"
import { Faker, faker } from "@faker-js/faker"
import testData from '../fixtures/testData.json'
const registerObj = new RegisterPage()
const loginObj = new LoginPage()
const productObj = new ProductPage()
const checkoutObj = new CheckOutPage()


describe('Lambda test',()=>{

    it('End to end flow',()=>{
        let Email = faker.internet.email()

        registerObj.openUrl(testData.envName);
        registerObj.gotoPage(testData.pageName.register);
        registerObj.enterFirstName(testData.firstName);
        registerObj.enterLastName(testData.lastName);
        registerObj.enterEmail(Email);
        registerObj.enterTelePhoneNo(testData.telephoneNo);
        registerObj.enterPassword(testData.password);
        registerObj.enterCnfPassword(testData.cnfPassword);
        registerObj.selectSubscribeBtn(testData.subscribDecision);
        registerObj.selectTermsAgreeCheckBox();
        registerObj.clickonSubmitBtn();
        registerObj.verifySuccessMsg(testData.successMsg);
        registerObj.clickOnlogOut();

        // verify login
        registerObj.gotoPage(testData.pageName.login);
        loginObj.enterLoginDetails(Email,testData.password);

        //verify product add and checkout process
        productObj.selectProductType(testData.productType);
        productObj.selectProductName(testData.productName);
        productObj.checkandBuyProduct();

        checkoutObj.verifyCheckOutPage();
        checkoutObj.addfirstName(testData.firstName);
        checkoutObj.addlastName(testData.lastName);
        checkoutObj.addcompanyName(testData.companyName);
        checkoutObj.addcAddress(testData.address);
        checkoutObj.addCityName(testData.city);
        checkoutObj.addPostalCode(testData.postcode);
        checkoutObj.selectCountry(testData.country);
        checkoutObj.selectState(testData.state);
        checkoutObj.agreeTermsandCondition();
        checkoutObj.submit();
        checkoutObj.verifyConfirmOrder();
        checkoutObj.verifyConfirmationMsg(testData.orderConfirmMsg);







    })









})