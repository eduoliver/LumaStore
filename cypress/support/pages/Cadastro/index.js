const el = require("./elements").ELEMENTS;

class Cadastro {
    acessarPaginaCadastro() {
        cy.visit('https://magento2-demo.magebit.com/')
        cy.contains('Create an Account')
            .click()
        cy.wait(60)
    }

    preencherFirstName() {
        cy.get(el.firstName)
            .click()
            .type('Eduardo')
    }

    preencherLastName() {
        cy.get(el.lastName)
            .click()
            .type('Oliveira')
    }

    preencherEmail() {
        cy.get(el.email)
            .click()
            .type('eduardo@gmail.br')
    }

    preencherPassword() {
        cy.wait(50)
        cy.get(el.password)
            .click()
            .type('A23456b#')
    }
    
    preencherConfirmPassword() {
        cy.wait(50)
        cy.get(el.passwordConfirm)
            .click()
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
        cy.get(el.errorPassword)
            .should('be.visible')
    }

    assinarNewslleter() {
        cy.get(el.newsletter)
            .click()
        }

    preencherPassworMalFormado() {
        cy.wait(50)
        cy.get(el.password)
            .click()
            .type('AAAAAAAA')
    }

    validaErroPasswordMalFormado() {
        cy.get(el.errorPassword)
            .should('be.visible')
            .should('have.text', el.textInvalidPassword)
    }

    validaErroConfirmPassword() {
        cy.get(el.errorConfirmPassword)
            .should('be.visible')
    }

    validaErroEmailMalFormado() {
        cy.get(el.emailError)
            .should('be.visible')
            .should('have.text', el.textInvalidEmail)
    }

    preencherEmailMalformado() {
        cy.get(el.email)
            .click()
            .type('eduardo@gmail')
    }

    preencherConfirmPasswordInvalido() {
        cy.wait(50)
        cy.get(el.passwordConfirm)
            .click()
            .type('A23456b!')
    }

    validarErroConfirmPasswordMalFormado() {
        cy.get(el.errorConfirmPassword)
            .should('be.visible')
            .should('have.text', el.textInvalidConfirmPassword)
    }

    validarCadastroSucesso() {
        cy.get(el.registeredSuccess)
        .should('be.visible')
        .should('have.text', el.textRegisteredSuccess)
    }

    validarCadastroExistente() {
        cy.get(el.userExist)
        .should('be.visible')
        .should('have.text', el.textUserExist)
    }

    preencherEmailRandomico() {
        const randomEmail = Math.random().toString(30).substring(2,15)+"@gmail.br"
        cy.get(el.email)
            .click()
            .type(randomEmail)
    }

    primeiroCadastro() {
        this.acessarPaginaCadastro();
        this.preencherFirstName();
        this.preencherLastName();
        this.preencherEmail();
        this.preencherPassword();
        this.preencherConfirmPassword();
        this.clickBotaoSubmit();      
        cy.wait(100)
    }
}

export default new Cadastro();