
// variaves definidas com palavra reservada var tem escopo  global, e funcao e variaves
// Let tem escopo global e escopo de funcao, escopo de bloco, sempre utilizar let


var numero = 1

{


    let numero = 2
    console.log('dentro =', numero)


}


console.log('fora =', numero)
