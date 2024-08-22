export class LoginPage{

    WebLocators = {

        'userEmail'   : 'form[action*="login"] input[name="email"]',
        'userpassword': 'form[action*="login"] input[name="password"]',
        'submitBtn'   : 'form[action*="login"] input[type="submit"]',
        'msg'         : 'aside#column-right a:first-of-type'

    }

    enterLoginDetails(Email,Password){
        cy.get(this.WebLocators.userEmail).type(Email)
        cy.get(this.WebLocators.userpassword).type(Password)
        cy.get(this.WebLocators.submitBtn).click()
        cy.get(this.WebLocators.msg).should('contain','My Account')
    }
}