/*
* Como um cliente da loja LUMA
* Quero realizar o cadastro de usuário
* Para aproveitar todas as vantagens oferecidas pela loja
*/

import Cadastro from "../support/pages/Cadastro";

describe('Cadastro de usuário sem todos os campos obrigatórios preenchidos', () => {
    context('Dado que eu acesso o formulário de cadastro da loja Luma', () => {
        beforeEach(() => {
            Cadastro.acessarPaginaCadastro();
        })

        context('Quando submeto o formulário sem preencher o campo FirstName', () => {
            beforeEach(() => {
                Cadastro.preencherLastName();
                Cadastro.preencherEmail();
                Cadastro.preencherPassword();
                Cadastro.preencherConfirmPassword();
                Cadastro.clickBotaoSubmit();
            })        
                it('Então é mostrado erro no campo First Name', () => {
                    Cadastro.validaErroFirstName();
                })
        })

        context('Quando submeto o formulário sem preencher o campo LastName', () => {
            beforeEach(() => {
                Cadastro.preencherFirstName();
                Cadastro.preencherEmail();
                Cadastro.preencherPassword();
                Cadastro.preencherConfirmPassword();
                Cadastro.clickBotaoSubmit();
            })        
                it('Então é mostrado erro no campo Last Name', () => {
                    Cadastro.validaErroLastName();
                })
        })
    }) 
})