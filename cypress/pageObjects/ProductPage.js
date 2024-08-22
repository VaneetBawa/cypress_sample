
export class ProductPage{

    WebLocators = {

        'mega_menu'    : 'ul.navbar-nav.horizontal span',
        'productType'  : 'li.nav-item a',
        'selectProduct': 'h4.title>a',
        'verifyProduct'      : '#product-product h1',
        'availibility' : 'li>span.badge',
        'buyNowBtn'    : 'button[title="Buy now"]'

    }

    selectProductType(addProducType){
        cy.get(this.WebLocators.mega_menu).contains('Mega Menu').trigger('mouseover')
        cy.get(this.WebLocators.productType).contains(addProducType).click()
    }

    selectProductName(productName){
        cy.get(this.WebLocators.selectProduct).contains(productName).click()
        cy.get(this.WebLocators.verifyProduct).invoke('text').should('contain',productName)
    }

    clickOnBuyNowBtn()
    {
        cy.get(this.WebLocators.buyNowBtn).click()
    }

    checkandBuyProduct(){
        if(cy.get(this.WebLocators.availibility).invoke('text').should('contain',"In Stock"))
        {
            this.clickOnBuyNowBtn()
        }
        else{
            console.log("Product is Out of Stock")

        }
    }



}