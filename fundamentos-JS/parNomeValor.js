// par nome/valor

const saudacao = 'Opa' // contexto  léxico 1


function exe()   {
     const saudacao = 'Falaaa' // contexto  léxico 2
     return saudacao


}



// Objetos sao  grupos de aninhados de pares nome/valor

const cliente = {
    nome: 'Schorr',
    idade: 32,
    peso: 90,
    endereço:{
        lograduro: 'Rua muito legal',
        numero:123
    }

}



console.log(saudacao)

console.log(exe())

console.log(cliente )

