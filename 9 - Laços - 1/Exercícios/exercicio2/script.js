//Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

let numUsuario = Number(prompt("Insira um número"))
let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0 ; i < tabuada.length; i++){
    console.log(numUsuario * tabuada[i])
}