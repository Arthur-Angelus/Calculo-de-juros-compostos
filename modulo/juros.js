/****************************************************************************
 * Objetivo: Arquivo responsavel para calculo de juros compostos de um produto
 * Autor: Arthur
 * Data: 05/08/25
 * Versão: 1.0
 ***************************************************************************/

function calcularMontante (valor1, valor2, valor3, valor4){
    let capital = valor1
    let juros = valor2 / 100
    let periodos = valor3
    let tempo = valor4

    let montante = Number(capital) * (1 + Number(juros) / Number(periodos)) ** (Number(periodos) * Number(tempo))

    return Number(montante).toFixed(2)
}

function calcularJurosCompostos (montante, juros, valor5){
    let numeroParcelas = valor5

    let fator = juros * (1 + juros) ** Number(numeroParcelas) / ((1 + juros) ** Number(numeroParcelas) - 1);
    let parcelaC = Number(montante) * Number(fator);

    return Number(parcelaC).toFixed(2)
}

//console.log(calcularMontante(100,50,6,1))
//console.log(calcularJurosCompostos(123,0.05,5))

module.exports = {
    calcularMontante,
    calcularJurosCompostos
}