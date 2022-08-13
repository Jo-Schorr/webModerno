// funcao é um bloco de código nomeado,  existem funcao sem nenhum nome.

// funcao sem retorno
function imprimiSoma(a, b) {
    console.log(a + b)

}

imprimiSoma(2, 3)
imprimiSoma(2)
imprimiSoma(2,3,5,6,7,8,9,10,11,12,13,14,15)
imprimiSoma()


// Funcao com retorno
function soma(a, b = 0)  {
    return a + b
}


console.log(soma(2,3))
console.log(soma(2))
