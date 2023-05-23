// EXERCÍCIO 06
const listaDeCompras = ["batata", "cenoura", "beterraba"]

console.log(listaDeCompras[1])
console.log("Tamanho da lista:", listaDeCompras.length)
listaDeCompras.push("Mandioca")
console.log(listaDeCompras)
console.log("Tem cenoura?", listaDeCompras.includes("cenoura"))

listaDeCompras.splice(1, 1)
console.log(listaDeCompras)