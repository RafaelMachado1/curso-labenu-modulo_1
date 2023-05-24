//Pratica Guiada
//Exercicio 1

//Forma mais classica
const array = [55, 60, 41, 13, 1, 8, 30, 25, 99]

function multiplicador3(array) {
  const novoArray = []
  for (let i = 0; i < array.length; i++) {
    novoArray.push(array[i] * 3)
  }
  return novoArray

}
console.log(multiplicador3(array))


// Simplificado, com arrow functin e for..of
const multiplicador4 = (array) => {
  const novoArray = []
  for (let numero of array) {
    novoArray.push(numero * 3)
  }
  return novoArray
}
console.log(multiplicador4(array))


//Meu exemplo
const array2 = [1, 2, 3, 4, 5, 6, 7]

const multiplica3 = (array) => {
  const novoArrayNumeros = []
  for (let i of array) {
    novoArrayNumeros.push(i * 3)
  }
  return novoArrayNumeros
}
console.log(multiplica3(array))


//Retornar array com múmeros pares
function retornaPares(array) {
  const pares = []
  for (let numero of array) {
    if (numero % 2 === 0) {
      pares.push(numero)
    }
  }
  return pares
}
console.log(retornaPares(array))



// // //Exercicio 2 - Callback
const multiplicaERetornaPares = (array, funcaoCallback) => {
  const novoArray = []
  for (let numero of array) {
    novoArray.push(numero * 3)
  }
  let resultadoFinal = funcaoCallback(novoArray)

  return resultadoFinal
}
console.log(multiplicaERetornaPares(array, retornaPares))


//Exercicio 3 - map()
const multiplicador3 = (array) => {
  const novoArray = []
  for (let numero of array) {
    novoArray.push(numero * 3)
  }
  return novoArray
}
console.log(multiplicador3(array))


//Com o map é bem mais simples
const multiplicaComMap = array.map((item) => {
  return item * 3
})
console.log(multiplicaComMap)


//Exercicio 4 - filter()
function retornaPares(array) {
  const pares = []
  for (let numero of array) {
    if (numero % 2 === 0) {
      pares.push(numero)
    }
  }
  return pares
}
console.log(retornaPares(array))


//Com o filter é bem mais simples
const retornaPares = array.filter((item) => {
  return item % 2 === 0
})
console.log(retornaPares)



