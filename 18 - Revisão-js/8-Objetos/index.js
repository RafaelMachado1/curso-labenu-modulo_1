// EXERCÍCIO 08

const pessoa = {
    nome: "Letícia",
    idade: 27,
    generoMusical: "Rock"
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)

const outraPessoa = {
    ...pessoa,
    nome: "Amanda"
}

console.log(outraPessoa)