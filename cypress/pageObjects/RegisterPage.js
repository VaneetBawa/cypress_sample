export class RegisterPage{

    WebLocators = {
        
        'myAccountbtn': 'ul.navbar-nav.horizontal span',
        'registerbtn' : 'aside#column-right a',
        'loginbtn'    : 'aside#column-right a',
        'firstname'   : '#input-firstname',
        'lastname'    : '#input-lastname',
        'email'       : '#input-email',
        'telephoneNo' : '#input-telephone',
        'password'    : '#input-password',
        'cnfpassword' : '#input-confirm',
        'subscribeBtn': 'fieldset:last-of-type label',
      'agreecnditnBtn': 'input[name="agree"]',
      'submitBtn'     : 'input[type="submit"]',
      'successMsg'    : '#content h1',
      'errorMsg'      : 'div.alert',
      'logOut'        : 'aside#column-right a'
        
    }

    openUrl(urlName){
      cy.visit(Cypress.env(urlName))
      cy.url().should('contain','ecommerce')
    }

    gotoPage(pageName){
      cy.get(this.WebLocators.myAccountbtn).contains('My account').click()
      cy.get(this.WebLocators.registerbtn).contains(pageName).click()
      if(pageName == 'Register')
      {
        cy.url().should('contain','register');
      }
      else{
        cy.url().should('contain','login');
      }
      
    }

    verifyLogin(userName,password){
      cy.get()
    }

    enterFirstName(FName){
      cy.get(this.WebLocators.firstname).should('be.visible').type(FName)
    }

    enterLastName(LName){
      cy.get(this.WebLocators.lastname).should('be.visible').type(LName)
    }

    enterEmail(Email){
      cy.get(this.WebLocators.email).should('be.visible').type(Email)
    }

    enterTelePhoneNo(TelephoneNo){
      cy.get(this.WebLocators.telephoneNo).should('be.visible').type(TelephoneNo)
    }

    enterPassword(password){
      cy.get(this.WebLocators.password).should('be.visible').type(password)
    }

    enterCnfPassword(CnfPassword){
      cy.get(this.WebLocators.cnfpassword).should('be.visible').type(CnfPassword)
    }

    selectSubscribeBtn(BtnName){
      cy.get(this.WebLocators.subscribeBtn).should('be.visible').contains(BtnName).click()
    }

    selectTermsAgreeCheckBox(){
      cy.get(this.WebLocators.agreecnditnBtn).check({force:true}).should('be.checked')
    }

    clickonSubmitBtn(){
        cy.get(this.WebLocators.submitBtn).should('be.visible').click()

    }

    verifySuccessMsg(SuccessMsg){
      cy.get(this.WebLocators.successMsg).should('contain',SuccessMsg)
    }

    clickOnlogOut(){
      cy.get(this.WebLocators.logOut).contains('Logout').click()
    }






}