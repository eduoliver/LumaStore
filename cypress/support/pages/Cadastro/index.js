const el = require("./elements").ELEMENTS;

class Cadastro {

    acessarPaginaCadastro() {
        cy.visit('https://magento2-demo.magebit.com/')
        cy.contains('Create an Account')
            .click()
    }

    preencherFirstName() {
        cy.get(el.firstName)
            .type('Eduardo')
    }

    preencherLastName() {
        cy.get(el.lastName)
            .type('Oliveira')
    }

    preencherEmail() {
        cy.get(el.email)
            .type('eduardo@gmail.br')

    }

    preencherPassword() {
        cy.wait(70)
        cy.get(el.password)
            .type('A23456b#')
    }
    
    preencherConfirmPassword() {
        cy.wait(70)
        cy.get(el.passwordConfirm)
            .type('A23456b')
    }

        clickBotaoSubmit() {
        cy.get('.primary')
            .contains('Create an Account')
            .click()
        }

    validaErroFirstName() {
        cy.get(el.firstNameError)
            .should('be.visible')
    }

    validaErroLastName() {
        cy.get(el.lastNameError)
            .should('be.visible')
    }

}

export default new Cadastro();