# Bloco if /else

- if/else é a sintaxe de programação utilizada para 
condicionais
- Se a condição for verdadeira o código dentro do if é 
executado
- Se a condição for falsa o código dentro do else é 
executado

## Bloco if/else: todo código da ação vai entre chaves {}

```javascript
let condicao = false

if (condicao){
    console.log("Entrei no if")
} else {
    // Como o valor dacondição e false,
    // o código do bloco else serrá executado
    console.log("Entrei no else")
}
```
## Switch case
- Verifica o valor de uma variável 
- Os cases indicam as condições
- Se a variável for igual ao que está no case, o código de dentro será executado

```javascript
let paisDeOrigem

switch (paisDeOrigem){
    case "Brasil":
        console.log("brasileiro")
        break
    case "EUA":
        console.log("norte americano")
        break
    case "Inglaterra":
        console.log("inglês")
        break
    default:
        console.log("nacionalidade não encontrada")
        break
}
```

# Exercício 9
- Receba um número do usuário
    - Se for par, imprima: é par
    - Senão, imprima: é impar

# Exercício 10 
- Receba do usuário o nome de um bichinho:
    - Se for um cachorro, retorne: Au au
    - Se for um gato, retorne: Miau
    - Se for uma vaca, retorne: Muuu
    - Se for outro bichinho, retorne: sem barulho 
reconhecido :(
- Faça utilizando if/else e switch case