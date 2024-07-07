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
        cy.wait(100)
        cy.get(el.password)
            .type('A23456b#')
    }
    
    preencherConfirmPassword() {
        cy.wait(100)
        cy.get(el.passwordConfirm)
            .type('A23456b#')
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

    validaErroEmail() {
        cy.get(el.email)
            .should('be.visible')
    }

    validaErroPasswordVazio() {
        cy.get(el.errorPassorword)
            .should('be.visible')
    }

    assinarNewslleter() {
        cy.get(el.newsletter)
            .click()
        }

            preencherPassword() {
        cy.wait(100)
        cy.get(el.password)
            .type('A23456b#')
    }

    preencherPasswordMalFormado() {
        cy.wait(100)
        cy.get(el.password)
            .type('AAAAAAAA')
    }

    validaErroPasswordMalFormado() {
        cy.get(el.errorPassorword)
            .should('be.visible')
            .should('contains.', el.textInvalidPassword)
    }    
}

export default new Cadastro();