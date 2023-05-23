# O que são arrays?

- Arrays nada mais são do que listas de elementos
○ Ex: lista de compras, lista de alunos, lista de números 
da loteria, lista telefônica…
- No javascript, usamos colchetes para agrupar os itens 
de uma lista:

```javascript
const listaDeCompras = ["batata", "alface", "queijo"]
const listaDeNumerosMega = [2, 13, 26, 35, 41, 60]
```

# Acessando um elemento
- Acessamos os itens através da posição deles na lista!
- Funciona como se fosse uma lista numerada, 
começando do 0:

0. Batata <br>
1. Alface <br>
2. Queijo <br>

Qual é o itemnaposição 1 ?<br>
Resposta: Alface

# Protótipo de Arrays
- Propriedades
    - length ⇒ quantidade de itens da lista

- Métodos
    - push() ⇒ adiciona item ao fim da lista
    - pop() ⇒ retira último item da lista
    - includes() ⇒ true/false se existe o item
    - splice() ⇒ remover elementos sabendo o índice

# Exercício 6
Dada a lista ["batata", "cenoura", "beterraba"] realize as 
operações:
- Imprima o segundo item da lista
- Imprima o tamanho da lista
- Adicione o item "mandioca"
- Verifique se há um item chamado cenoura
- Remova o item de índice 1