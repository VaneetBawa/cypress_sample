export class CheckOutPage{

    WebLocators = {

        'firstname'   : 'input[name="firstname"]',
        'lastname'    : 'input[name="lastname"]',
        'companyName' : 'input[name="company"]',
        'address'     : 'input[name="address_1"]',
        'city'        : 'input[name="city"]',
        'postcode'    : 'input[name="postcode"]',
        'country'     : 'select[name="country_id"]',
        'state'       : 'select[name="zone_id"]',
        'T_C'         : 'input[name="agree"]',
        'submit'      : '#button-save:first-of-type',
        'confirmOrder': '#button-confirm:first-of-type',
        'confirmMsg'  : '#content h1',
        'selectNew'   : "input[value='new']:first-of-type"

    }

    verifyCheckOutPage(){
        cy.url().should('contain',"checkout")
    }

    addfirstName(firstname){
        cy.get(this.WebLocators.firstname).should('be.visible').type(firstname)
    }

    addlastName(lastname){
        cy.get(this.WebLocators.lastname).should('be.visible').type(lastname)
    }
  
    addcompanyName(companyName){
        cy.get(this.WebLocators.companyName).should('be.visible').type(companyName)
    }

    addcAddress(address){
        cy.get(this.WebLocators.address).should('be.visible').type(address)
    }

    addCityName(city){
        cy.get(this.WebLocators.city).should('be.visible').type(city)
    }

    addPostalCode(postalCode){
        cy.get(this.WebLocators.postcode).should('be.visible').type(postalCode)
    }

    selectCountry(country){
        cy.get(this.WebLocators.country).should('be.visible').select(country)
    }

    selectState(state){
        cy.get(this.WebLocators.state).should('be.visible').select(state)
    }

    agreeTermsandCondition(){
        cy.get(this.WebLocators.T_C).check({force:true}).should('be.checked')
    }

    submit(){
        cy.get(this.WebLocators.submit).scrollIntoView().should('be.visible').click()
    }

    verifyConfirmOrder(){
        cy.url().should('contain','confirm')
        cy.get(this.WebLocators.confirmOrder).should('be.visible').click()
    }

    verifyConfirmationMsg(confirmMsg){
        cy.url().should('contain','success')
        cy.get(this.WebLocators.confirmMsg).should('contain',confirmMsg)
    }
    


}