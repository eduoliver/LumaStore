/*
* Como um cliente da loja LUMA
* Quero realizar o login de usuário
* Para aproveitar todas as vantagens oferecidas pela loja
*/

import cadastro from "../support/pages/cadastro";
import Login from "../support/pages/Login"

describe('Realizar login na loja sem campos obrigatórios preenchidos', () => {
    context('Dado que Yasmin acessa o formulário de login da loja Luma', () => {
        beforeEach(() => {
            Login.acessarLogin();
        })
            context('Quando ela submete o login sem preencher o Email', () => {
                beforeEach(() => {
                    Login.preencherPassword();
                    Login.submit();
                })
                    it('Então é mostrado erro no campo Email', () => {
                        Login.validarErroEmail();
                    })
            })

            context('Quando ela submete o login sem preencher o Password', () => {
                beforeEach(() => {
                    Login.preencherEmail();
                    Login.submit();
                })
                    it('Então é mostrado erro no campo Password', () => {
                        Login.validarErroPass();
                    })
            })

    })
})       

describe('Realizar login na loja com Email fora do padrão', () => {
    context('Dado que Yasmin acessa o formulário de login da loja Luma', () => {
        beforeEach(() => {
            Login.acessarLogin();
        })
            context('Quando ela submete o login com o Email fora das regras de formação', () => {
                beforeEach(() => {
                    Login.preencherEmailMalformado();
                    Login.preencherPassword();
                    Login.submit();
                })
                    it('Então é mostrado erro de Email fora do padrão exigido', () => {
                        Login.validaErroEmaildMalFormado();
                    })
            })
    }) 
})       
    

describe('Realizar login na loja', () => {
    context('Dado que Yasmin acessa o formulário de login da loja Luma', () => {
        beforeEach(() => {
            Login.acessarLogin();
        })
            context('Quando ela submete o login para um usuário não cadastrado', () => {
                beforeEach(() => {
                    Login.preencherEmailRandomico();
                    Login.preencherPassword();
                    Login.submit();
                })
                    it('Então é mostrado erro de conta incorreta', () => {
                        Login.validarUsuarioNaoExistente();
                    })
            })

            context('Quando ela submete o login para um usuário cadastrado', () => {
                beforeEach(() => {
                    cadastro.primeiroCadastro(); //Realiza cadastro prévio
                    Login.acessarLogin();
                    Login.preencherEmail();
                    Login.preencherPassword();
                    Login.submit();
                })
                    it('Então é mostrada a área logada do usuário', () => {
                        Login.validarUsuarioLogado();
                    })


            })
    }) 
})   












