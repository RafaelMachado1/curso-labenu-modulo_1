# O que é uma função?

- Uma função é um bloco de código que pode ser 
chamado (ou invocado) a partir de um nome

```javascript
function calculaArea(altura,largura){
    const area = altura * largura // bloco de código
    console.log(area)             // bloco de código
}

calculaASrea(2,3) // chamada invocação
```

# Parâmetros e Argumentos
- Funções podem receber entradas, que podem ser 
usadas no meio do código
```Javascript
function calculaArea(altura,largura){ //altura e largura parâmetros
    const area = altura * largura 
    console.log(area)             
}

calculaASrea(2,3) // 2,3 argumentos
```

# Retorno

- Funções podem gerar saídas, que podem ser 
acessadas após a execução
```Javascript
function calculaArea(altura,largura){ 
    const area = altura * largura 
      return area //Retorno da função          
}
// atribui retorno à uma variável
const areaCalculada = calculaArea(2,3)

//imprime retornono console
console.log(calculaArea(2,3))
```

# comparação

```Javascript
//Declaração de função
function somaNumeros (num1, num2) {
    return num1 + num2
}

// Expressões de função
let somaNumeros = function (num1, num2){
    return num1 + num2
}

let somaNumeros = (num1, num2) => {
    return num1+ num2
}
```

# Exercício 7
- Crie uma função que:
    - Receba um array de números e 
    - Retorne um novo array com o último e o primeiro 
número do array recebido divididos por dois