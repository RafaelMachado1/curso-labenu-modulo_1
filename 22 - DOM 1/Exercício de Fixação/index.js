let lerValor = document.getElementById("paragrafo").innerHTML
console.log(lerValor)

const novoInput = () => {
    let novoValor = document.getElementById("texto")
    console.log(novoValor.value += "")
}

const adicionar = () => {
    let lerValor = document.getElementById("paragrafo")
    let novoValor = document.getElementById("texto")
    let novoParagrafo = lerValor.innerHTML += novoValor.value
    novoParagrafo.value = ""
}