// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
// Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
// Exemplo: [3,2,1,4,7] retorna 5
function retornaTamanhoArray(array) {
   
}

// EXERCÍCIO 02
// Escreva uma função que recebe um array como parâmetro e retorne este array invertido. 
// Exemplo: Para o array [8, 23, 16, 10] dado como entrada, retorne [10, 16, 23, 8]
// Desafio: Faça sem utilizar afunção reverse()
function retornaArrayInvertido(array) {
  
}

// EXERCÍCIO 03
// Escreva uma função que recebe um array de números e retorne o array com os números em ordem crescente. 
//Exemplo: [3, 2, 1, 4, 7] retorna [1, 2, 3, 4, 7]
// Desafio: Faça sem utilizar a função sort()
function retornaArrayOrdenado(array) {
  
}

// EXERCÍCIO 04
// Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
// Exemplo: [1, 2, 3, 4, 5, 6] deve retornar [2, 4, 6]
// Desafio: Faça sem utilizar o método filter() 
function retornaNumerosPares(array) {
  
}

// EXERCÍCIO 05
// Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.
// Exemplo: [1, 2, 3, 4, 5, 6] deve retornar [4, 16, 36]
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
// [1, 2, 3, 4, 5, 6] deve retornar [4, 16, 36]
// Exemplo: [1, 5, 3, 7, 5, 2] deve retornar 7 
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
/*Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades:

- `maiorNumero` → contém o maior número
- `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
- `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre)

⚠️   Obs: para os testes funcionarem, as propriedades do objeto devem possuir os exatos nomes acima*/
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
// Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares 
// Exemplo:     `3` retorna `[0, 2, 4]`
//              `5` retorna `[0, 2, 4, 6, 8]`
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
/*Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo:
ladoA, ladoB, ladoC e retorne se ele é equilátero, isósceles ou escaleno (não é necessário
validar se os lados fecham um triângulo).*/
// Exemplo: -   `1, 2, 4` retorna `"Escaleno"`
//              `1, 2, 1` retorna `"Isósceles"`
//              `5, 5, 5` retorna `"Equilátero"`
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
//Escreva uma função que receba um array de números e retorne um novo array com apenas
// 2 valores (NESTA ORDEM): o segundo maior e o segundo menor número do array original. 
// Exemplo: [3, 2, 1, 4, 7, 6, 5] retorna [6, 2]
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
/*Crie uma função que receba um objeto representando um filme com nome, ano, diretor e
elenco. Ela deve retornar uma chamada para assistir a esse filme, seguindo a estrutura do exemplo abaixo:

 entrada
{
   nome: 'O Diabo Veste Prada',
   ano: 2006,
   diretor: 'David Frankel',
   atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}

// saída
"Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel
 e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci."
*/
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
/* Crie uma função que recebe um objeto com as propriedades nome, idade, endereco e
email  e retorne um novo objeto com as mesmas propriedades, mas com o valor
"ANÔNIMO" para a propriedade nome. 
Exemplo: 

//entrada
{
	nome: "Astrodev",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
}

// saída
{
	nome: "ANÔNIMO",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
}

Dica: Use o operador spread
*/
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13
/*
Imagine que você trabalhe num parque de diversões, como pessoa desenvolvedora. As suas
tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do
parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito
grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo
que não podem. As regras para entrar na montanha russa do terror são: 

- Ter, no mínimo, 1.5m de altura;
- Ser mais velho do que 14 anos e
- Ser mais novo do que 60 anos.

Dados esses requisitos, escreva: 

A) uma **função** que receba um array e devolva outro contendo as pessoas que **tem permissão para entrar** no brinquedo

B) uma **função** que receba um array e devolva outro contendo as pessoas que **não** **tem permissão para entrar** no brinquedo


Exemplo:
// entrada
[
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

// saída - Item A
[
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
],

// saída - Item B
[
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

*/
// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
/*Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de
explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes.
Basicamente, eles salvam o nome do cliente, o saldo total e uma lista contendo todas as
compras realizadas pelo cliente. Exemplo:

// entrada
[
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]
A sua tarefa é: 

⇒ construir uma função que receba um **array** com os objetos do tipo acima como
parâmetro e atualizar o **saldo total** individual de cada um, **sem criar um novo** array.
Retorne o array original. 

O **array** do exemplo acima deve ficar assim:

// saída
[ 
  { cliente: 'João', saldoTotal: 400, compras: [] },
  { cliente: 'Paula', saldoTotal: 6260, compras: [] },
  { cliente: 'Pedro', saldoTotal: -3340, compras: [] },
  { cliente: 'Luciano', saldoTotal: -1900, compras: [] },
  { cliente: 'Artur', saldoTotal: 1300, compras: [] },
  { cliente: 'Soter', saldoTotal: 1200, compras: [] } 
]

*/
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15
/*
Você foi contratado por um escritório médico para organizar a agenda de consultas
[
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

A sua tarefa é criar uma função que receba o **array** acima como parâmetro e retorne um
**array de consultas ordenado pelos nomes dos pacientes (em ordem alfabética)**

Exemplo de saída:
 [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" }
  ]
Desafio: 
A sua segunda tarefa é criar uma função que receba o **array** acima como parâmetro e
retorne um **array de consultas ordenado pelas datas das consultas(da menor para a maior)**

Exemplo de saída:
   [ 
     { nome: "Márcia", dataDaConsulta: "04/05/2021" },
     { nome: "Pedro", dataDaConsulta: "02/07/2021" },
     { nome: "João",  dataDaConsulta: "01/10/2021" },
     { nome: "Paula", dataDaConsulta: "03/11/2021" } 
    ];
*/
// EXERCICIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}