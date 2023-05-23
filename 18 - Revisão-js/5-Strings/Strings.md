# Strings

```Javascript
Podemos declarar strings de 3 maneiras:
"Olá Mundo" , 'Olá Mundo' ou `Olá Mundo`

Podemos colocar variáveis no meio de 2 jeitos:
"Meu nome é " + nome + " e tenho " + idade + " anos"
`Meu nome é ${nome} e tenho ${idade} anos`
```

# Protótipo de Strings

- Propriedades
    - length ⇒ número de caracteres, conta espaço

- Métodos
    - toLowerCase() e toUpperCase() ⇒ minúsculo/maiúsculo
    - trim() ⇒ retira espaço do início e do fim
    - includes() ⇒ true/false se existem caracteres
    - replaceAll() ⇒ substitui caracteres por outros

# Exercício 5
Dada a frase " Hoje vou comer cenoura, ebaaa " realize as 
operações:
- Imprima a frase inicial juntamente com seu tamanho
- Retire os espaços do início e do fim
- Faça com que possua apenas letras minúsculas
- Verifique se as palavras comer e batata estão presentes
- Substitua cenoura por batata
- Verifique novamente se possui as palavras comer e batata
