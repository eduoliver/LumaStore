/*
* Como um cliente da loja LUMA
* Quero realizar a compra de um produto
* Para obter o produto desejado
*/

import Cadastro from "../support/pages/Cadastro";
import Compra from "../support/pages/Compra";

describe.only('Realizar compra de produto na loja', () => {
    context('Dado que Yasmin acessa o formulário de login da loja Luma', () => {
        beforeEach(() => {
            Cadastro.primeiroCadastro();
            Compra.login();
        })
            context('Quando ela realiza a compra de um produto', () => {
                beforeEach(() => {
                    Compra.selecionaProduto();
                    Compra.adicionarCarrinho();
                    Compra.acessarCarrinho();
                    Compra.acessarCheckout();
                    Compra.preencherEndereco();
                    Compra.preencherCidade();
                    Compra.estado();
                    Compra.preencherCEP();
                    Compra.preencherFone();
                    Compra.metodoEntrega();
                    Compra.next();
                    Compra.finalizarCompra();
                })
                    it('Então a compra é feita com sucesso', () => {
                        Compra.sucessoCompra();    
                    })
            })
    })
})



