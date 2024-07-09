const el = require("./elements").ELEMENTS;

class Login {
    acessarLogin() {
        cy.visit('https://magento2-demo.magebit.com/')
        cy.get('.authorization-link')
        cy.contains('Sign In ')
            .click()
            cy.wait(60)
    }

    preencherEmail() {
        cy.get(el.email)
            .click()
            .type('eduardo@gmail.br')
        cy.wait(500)
    }

    preencherEmailMalformado() {
        cy.get(el.email)
        .click()
        .type('eduardo@gmail')
    }

    submit() {
        cy.get(el.bntSubmit)
            .click()
        cy.wait(50)
    }

    preencherPassword() {
        cy.get(el.password)
            .click()
            .type('A123456#')   
        cy.wait(500)
    }

    validarErroEmail() {
        cy.get(el.erroEmail)
            .should('be.visible')
            .should('have.text', el.textErrorEmail) 
    }

    validarErroPass() {
        cy.get(el.erroPass)
            .should('be.visible')
            .should('have.text', el.textErrorPass) 
    }

    validaErroEmaildMalFormado() {
        cy.get(el.invalidEmail)
            .should('be.visible')
            .should('have.text', el.textInvalidEmail)
    }    

    preencherEmailRandomico() {
        const randomEmail = Math.random().toString(30).substring(2,15)+"@gmail.br"
        cy.get(el.email)
            .click()
            .type(randomEmail)
    }

    validarUsuarioNaoExistente() {
        cy.get(el.nonExistentUser)
            .should('be.visible')
            .should('have.text', el.textNonexistUser)
    }
}
export default new Login();

