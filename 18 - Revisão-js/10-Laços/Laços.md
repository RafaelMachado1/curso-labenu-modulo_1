# Laços

## while
- Exemplo 1 - Imprimindo alguns números

```Javascript
let i = 0           //Começo

while (i < 10) {    // i < 10 condição de continuação

    console.log(i)  // Ação repedida

    i++             // Incremento
}
```

## for
- O laço for é uma maneira que permite simplificar a escrita delaços que tenham este comportamento

```Javascript
for(let i = 0; i < 10;  i++){
    console.log(i)
}

// let i = 0;       começo
// i <10;           continuação
// i++              incremento
// console.log(i)   ação repetida
```

# for... of...
- Uma forma de simplificar a leitura dos elementos do array é utilizando o loop for...of...

```Javascript
const numeros = [14, 67, 89, 15, 23]

for(let numero of numeros){
    console.log(numero)
}
```

# Exercício 11
- Receba um array com números e devolva qual o maior 
dentro dele
- Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O 
maior número é 18"
- Faça utilizando as três estruturas de loop vistas

# Exercício 
```Javascript
const prof = {
 nome: "Letícia Chijo",
 idade: 27,
 aulasFront: true,
 aulasBack: false,
 jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
 contaPiada: () => console.log("É pave ou pacume?"),
 pet: {
 nome: "Polly",
 especie: "cachorrinha",
 raca: "Lhasa Apso",
 snacksFavoritos: ["biscoito", "maçã", "frango"]
 }
}
```
- Dado o objeto do slide anterior, imprima:
    - Oi! Eu me chamo Letícia Chijo e tenho 27 anos. 
Dou/não dou aula de front e dou/não dou aula de back.
Meus jogos favoritos são: 
1) Chrono Trigger
2) Undertale
3) Hollow Knight
Tenho uma cachorrinha chamada Polly que gosta de comer maçã
- Faça a Chijo contar uma piada ruim

