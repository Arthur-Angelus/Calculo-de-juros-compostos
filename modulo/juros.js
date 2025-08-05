/****************************************************************************
 * Objetivo: Arquivo responsavel para calculo de juros compostos de um produto
 * Autor: Arthur
 * Data: 05/08/25
 * Versão: 1.0
 ***************************************************************************/

function calcularMontante (valor1, valor2, valor3, valor4){
    let capital = valor1
    let juros = valor2
    let parcelas = valor3
    let tempo = valor4

    let montante = Number(capital) * (1 + Number(juros/100) / Number(parcelas)) ** (Number(parcelas) * Number(tempo))

    console.log(calcularMontante(100,50,6,1))
    return Number(montante).toFixed(1)
}