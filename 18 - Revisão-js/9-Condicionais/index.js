// EXERCÍCIO 09
const numero = Number(prompt("Digite um número"))

if (numero % 2 === 0) {
    console.log("É par")
} else {
    console.log("É ímpar")
}

// EXERCÍCIO 10
const bichinho = prompt("Digite um bichinho")

if (bichinho === "cachorro") {
    console.log("Au au")
} else if (bichinho === "gato") {
    console.log("Miau")
} else if (bichinho === "vaca") {
    console.log("Muuuu")
} else {
    console.log("Barulho não encontrado")
}

switch (bichinho) {
    case "cachorro":
        console.log("Au au")
        break;
    case "gato":
        console.log("Miau")
        break;
    case "vaca":
        console.log("Muuuu")
        break;
    default:
        console.log("Barulho não encontrado")
        break
}