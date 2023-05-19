
/*const nome = prompt("Qual é o seu nome?")
const nomeMaiusculas = nome.toUpperCase()
console.log(nomeMaiusculas)
const cor = prompt("Qual é a sua cor predileta?")
const citacao = prompt("Qual é a sua citacao predileta?")

const stringConcatenada = 'A cor favorita de ' + nome + ' é ' + cor + 'e a citação predileta é:\'' + citacao + '\.'
console.log('STRING CONCATENADA', stringConcatenada)

const templateString = `${nome} \nCor favorita: ${cor} `
console.log('TEMPLATE STRING', templateString)

const tamanho = nome.length
console.log('o seu nome tem', tamanho, 'caracteres!')

const temA = nomeMaiusculas.includes('A')
console.log('Seu nome tem a letra A?', temA)*/


//  exercício de fixação
const nomeUsuario = prompt("Qual o seu nome?")
const emailUsuario = prompt("Qual o seu email?")
const tamanho = nomeUsuario.length

console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}. Seu nome possui ${tamanho} caracteres`)

const temArroba = emailUsuario.includes('@')
console.log(`Seu email possui @: ${temArroba}`)

const frase = `O email ${emailUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}. Seu nome possui ${caracteres} caracteres`
const novaFrase = frase.replaceAll("r", "l")
console.log(novaFrase)