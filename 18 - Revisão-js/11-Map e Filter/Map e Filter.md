# Map e Filter
- Funçao Map
    - Utilização: Criar um novo array com elementos modificados em relação ao original;
    - Retorna um array? sim!
    - Tamanho do array: igual ao original;

- Função Filter
    - Utilização: Criar um novo array com alguns elementos do original;
    - Retorna um array? sim!
    - Tamanho do Array: igual ou menor que o original;

## Map - Sintaxe
```javascript
const pokemons = [
 { nome: "Bulbasaur", tipo: "grama" },
 { nome: "Bellsprout", tipo: "grama" },
 { nome: "Charmander", tipo: "fogo" },
 { nome: "Vulpix", tipo: "fogo" },
 { nome: "Squirtle", tipo: "água" },
 { nome: "Psyduck", tipo: "água" },
]
const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {
 return pokemon.nome
})
```

## Filter - Sintaxe
```Javascript
const pokemons = [
 { nome: "Bulbasaur", tipo: "grama" },
 { nome: "Bellsprout", tipo: "grama" },
 { nome: "Charmander", tipo: "fogo" },
 { nome: "Vulpix", tipo: "fogo" },
 { nome: "Squirtle", tipo: "água" },
 { nome: "Psyduck", tipo: "água" },
]
const apenasPokemonsDeGrama = pokemons.filter((pokemon, indice, array) => {
 return pokemon.tipo === "grama"
})
```

# Exercício 13 
Dado um array de produtos onde cada produto possui nome, 
categoria e preço:
- Retorne um novo array com todos os produtos porém 
com o 10% de desconto no preço
- Retorne um array apenas com os itens da categoria 
hortifruti
- Retorne um array apenas com os itens de hortifruti E com 
10% de desconto no preço

```Javascript
const produtos = [
 { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
 { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
 { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
 { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
 { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
 { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
 { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
 { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
 { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
 { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
]
```