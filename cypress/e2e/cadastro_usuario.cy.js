/*
* Como um cliente da loja LUMA
* Quero realizar o cadastro de usuário
* Para aproveitar todas as vantagens oferecidas pela loja
*/

import Cadastro from "../support/pages/Cadastro";

describe('Cadastro de usuário sem todos os campos obrigatórios preenchidos', () => {
    context('Dado que Yasmin acessa o formulário de cadastro da loja Luma', () => {
        beforeEach(() => {
            Cadastro.acessarPaginaCadastro();
        })

        context('Quando ela submete o formulário sem preencher o campo FirstName', () => {
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

        context('Quando ela submete o formulário sem preencher o campo Last Name', () => {
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

        context('Quando ela submete o formulário sem preencher o campo Email', () => {
            beforeEach(() => {
                Cadastro.preencherFirstName();
                Cadastro.preencherLastName();
                Cadastro.preencherPassword();
                Cadastro.preencherConfirmPassword();
                Cadastro.clickBotaoSubmit();
            })        
                it('Então é mostrado erro no campo Email', () => {
                    Cadastro.validaErroEmail();
                })
            })        
                
        context('Quando ela submete o formulário sem preencher o campo Password', () => {
            beforeEach(() => {
                Cadastro.preencherFirstName();
                Cadastro.preencherLastName();
                Cadastro.assinarNewslleter();
                Cadastro.preencherEmail();
                Cadastro.preencherConfirmPassword();
                Cadastro.clickBotaoSubmit();
            })        
                it('Então é mostrado erro no campo Password', () => {
                    Cadastro.validaErroPasswordVazio();
                })                
        })

        context('Quando ela submete o formulário sem preencher o campo Confirm Password', () => {
            beforeEach(() => {
                Cadastro.preencherFirstName();
                Cadastro.preencherLastName();
                Cadastro.assinarNewslleter();
                Cadastro.preencherEmail();
                Cadastro.preencherPassword();
                Cadastro.clickBotaoSubmit();
            })        
                it('Então é mostrado erro no campo Confirm Password', () => {
                    Cadastro.validaErroConfirmPassword();
                })                
        }) 
    }) 
})
//Demais variações de campos mal formados devem ser feitos em outra camada de testes
describe('Cadastro de usuário com campos mal formados', () => {
    context('Dado que Yasmin acessa o formulário de cadastro da loja Luma', () => {
        beforeEach(() => {
            Cadastro.acessarPaginaCadastro();
        })    
            context('Quando ela submete o formulário com o campo Password fora das regras de formação', () => {
                beforeEach(() => {
                    Cadastro.preencherFirstName();
                    Cadastro.preencherLastName();
                    Cadastro.assinarNewslleter();
                    Cadastro.preencherEmail();
                    Cadastro.preencherPasswordMalFormado();
                    Cadastro.preencherConfirmPassword();
                    Cadastro.clickBotaoSubmit();
                })        
                    it('Então é mostrado erro de Password fora do padrão exigido', () => {
                        Cadastro.validaErroPasswordMalFormado();
                    })                
            })

            context('Quando ela submete o formulário com o campo Confirm Password diferente do campo Password', () => {
                beforeEach(() => {
                    Cadastro.preencherFirstName();
                    Cadastro.preencherLastName();
                    Cadastro.assinarNewslleter();
                    Cadastro.preencherEmail();
                    Cadastro.preencherPassword();
                    Cadastro.preencherConfirmPasswordInvalido();
                    Cadastro.clickBotaoSubmit();
                })        
                    it('Então é mostrado erro de Confirmação de Password diferente do Password', () => {
                        Cadastro.validarErroConfirmPasswordMalFormado();
                    })                
            })

            context('Quando ela submete o formulário com o campo Email fora das regras de formação', () => {
                beforeEach(() => {
                    Cadastro.preencherFirstName();
                    Cadastro.preencherLastName();
                    Cadastro.assinarNewslleter();
                    Cadastro.preencherEmailMalformado();
                    Cadastro.preencherPassword();
                    Cadastro.preencherConfirmPassword();
                    Cadastro.clickBotaoSubmit();
                })        
                    it('Então é mostrado erro de Email fora do padrão exigido', () => {
                        Cadastro.validaErroEmaildMalFormado();
                    })                
            })  
    })

})