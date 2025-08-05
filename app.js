/****************************************************************************
 * Objetivo: Realizar calculo de juros compostos com a entrada de dados fornecidos pelo cliente
 * Autor: Arthur
 * Data: 05/08/25
 * Versão: 1.0
 ***************************************************************************/

const MESSAGE_ERROR_EMPTY = 'ERRO: Existem campos não preenchidos.'
const MESSAGE_ERROR_NOT_NUMBER = 'ERRO: não é possivel calcular com a entrada de letras.'
const MESSAGE_ERROR_OUT_OF_RANGE = 'ERRO: os valores informados precisam ser acima de 0.'

//import da biblioteca readline
var readline = require('readline')

//criando um objeto para entrada e saida de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada de dados do nome do cliente
entradaDeDados.question('Digite o nome do cliente:', function (nome) {
    
    let nomeCliente = String(nome).toUpperCase()

    //entrada de dados do nome do produto
    entradaDeDados.question('Digite o nome do produto:', function (nomeP) {
        
        let nomeProduto = String(nomeP).toUpperCase()

        //entrada de dados da capital
        entradaDeDados.question('digite a capital inicial:', function (valor1) {
            let capital = valor1

            //entrada de dados do juros
            entradaDeDados.question('insira a taxa de juros anual:', function (valor2) {
                let juros = valor2

                //entrada de dados das parcelas
                entradaDeDados.question('digite o numero de juros compostos por ano:', function (valor3) {
                    let parcelas = valor3

                    //entrada de dados do tempo em anos
                    entradaDeDados.question('digite o tempo em anos:', function (valor4) {
                        let tempo = valor4

                        if (capital == '' || juros == '' || parcelas == '' || tempo == '' || nome == '') {
                            console.log(MESSAGE_ERROR_EMPTY)

                        } else if (isNaN(capital) || isNaN(juros) || isNaN(parcelas) || isNaN(tempo)) {
                            console.log(MESSAGE_ERROR_NOT_NUMBER)

                        } else if (Number(capital) < 0 || Number(juros) < 0 || Number(parcelas) < 0 || Number(tempo) < 0) {
                            console.log(MESSAGE_ERROR_OUT_OF_RANGE)

                        } else {
                            
                        }
                    })
                })
            })
        })
    })
})