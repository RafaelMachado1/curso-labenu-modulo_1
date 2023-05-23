// EXERCÍCIO 11
const numeros = [11, 15, 18, 14, 120, 13, 100]

let maior = -Infinity

let i = 0
while (i < numeros.length) {
    if (numeros[i] > maior) {
        maior = numeros[i]
    }
    i++
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i]
    }
}

numeros = numeros[i]
for (let numero of numeros) {
    if (numero > maior) {
        maior = numero
    }
}

console.log(`O maior número é ${maior}`)


// EXERCÍCIO 12
const prof = {
    nome: "Letícia Chijo",
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
    contaPiada: () => console.log("É pave ou pacume?"),
    pet: {
        nome: "Polly",
        especie: "cachorrinha",
        raca: "Lhasa Apso",
        snacksFavoritos: ["biscoito", "maçã", "frango"]
    }
}

const verificaAula = (aula) => {
    if (aula) {
        return "Dou"
    } else {
        return "Não dou"
    }
}

const aulasBack = verificaAula(prof.aulasBack)
const aulasFront = verificaAula(prof.aulasFront)

const jogos = []


for (let i = 1; i <= prof.jogosFavoritos.length; i++) {
    jogos.push(`${i}) ${prof.jogosFavoritos[i - 1]}`)
}

console.log(jogos)

const frase = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos.
  ${aulasFront} aulas de front e ${aulasBack} aulas de back.
  Meus jogos favoritos são: ${jogos}
  Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}
  `
console.log(frase)
prof.contaPiada()