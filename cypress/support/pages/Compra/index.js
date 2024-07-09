import Login from "../Login";

const el = require("./elements").ELEMENTS;

class Compra {
    login() {
        Login.acessarLogin();
        Login.preencherEmail();
        Login.preencherPassword();
        Login.submit();
        cy.visit('https://magento2-demo.magebit.com/')
    }

    selecionaProduto() {
        cy.get(el.item)
        .click()
        cy.wait(50)
    }

    adicionarCarrinho() {
        cy.get(el.addcard)
            .click()
        cy.wait(900)
    }

    acessarCarrinho() {
        cy.get(el.showcard)
            .click()
        cy.wait(90)
    }

    acessarCheckout() {
        cy.get('#top-cart-btn-checkout')
            .click();
            cy.wait(3000)
    }

    preencherEndereco() {
        cy.xpath(el.address)
            .click()
            .type('Av. Paulista 001')
    }

    
    preencherCidade() {
        cy.xpath(el.city)
            .click()
            .type('São Paulo')
    }
    
    preencherCEP() {
        cy.xpath(el.cep)
            .click()
            .type('12345-6789')
            .wait(50)
    }
    
    preencherFone() {
        cy.xpath(el.phone)
            .click()
            .type('19 9881000')
    }
    
    
    metodoEntrega() {
        cy.get(el.methodo)
            .first()
            .check()
    }
    
    next() {
        cy.get(el.nextButton)
            .click()
    }
    
    finalizarCompra() {
        cy.get(el.finishShopping)
            .click()
        cy.wait(100)
    }
    
    sucessoCompra() {
        cy.get(el.successShopping)
            .should('be.visible')
    }

    estado() {
        cy.get(el.state)
            .select('Arizona')
    }
}


export default new Compra();