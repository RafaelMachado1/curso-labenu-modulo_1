# Estrutura padrão de um objeto

```Javascript
// Declaração com let ou const seguido do nome do objeto e atribuição de valor com o sinal de =
const objeto = { //abertura de chaves logo após o =
    primeiraPropriedade: "Valor", // propriedades separadas por vírgula
    segundaPropriedade: "Valor"

    //chave e valor separados por dois pontos
}
```

# Acessando e alterando propriedades
 - Notações do ponto

 ```Javascript 
 const instrutora = {
    nome: "Amanda Rangel",
    idade: 27,
    email: "mandinha_rock@gmail.com"
}

constnomeDaInstrutora = intrutora.nome;
console.log(nomeDaInstrutora)
```

# Espalhamento ou spread
- Podemos copiar um objeto utilizando o spread operator

```Javascript
const usuario = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@labenu.com.br"
}

const novoUsuario = {
    ...usuario,
    nome: "Caio",
    sobrenome: "Teixeira"
}
```
# Exercício 8

- Crie um objeto que represente uma pessoa. Essa pessoa 
precisa ter nome, idade e gênero musical preferido
- Imprima no console as propriedades desse objeto, 
seguindo o modelo abaixo:
"O nome da pessoa é ___, ela tem ___ anos e gosta muito de 
___."
- Crie uma nova pessoa, com mesma idade e gênero 
musical, mas nome diferente
