# Variáveis 

- Variáveis são estruturas que permitem guardar e 
acessar quaisquer informações no nosso código.

- Antes de usarmos estas variáveis, nós precisamos 
declará-las (criá-las)

```Javascript
const nome = 23 // const NÃO pode mudar o valor
let idade = 23 // let pode mudar o valor!
idade = 24
```

- Uma variável pode receber qualquer tipo de valor 
(booleano, números, strings, arrays, objetos...)

- Elas devem ter nomes significativos e seguir o padrão 
camelCase 
    - Ruim: Nome
    - Bom: nomeDoUsuario

# Conversões de Tipos

- Podemos converter strings para números e vice-versa
- Geralmente usamos essas funções de conversão junto 
com o prompt, que sempre guarda o que o usuário 
escreveu em forma de string!

    - Número ⇒ String: toString()
    - String ⇒ Número: Number()

# Exercício 1
- Crie uma variável para guardar o nome de um produto e 
peça para o usuário inserir esse nome
- Crie uma variável para guardar o preço de um produto e 
peça para o usuário inserir esse valor
- O GERENTE FICOU DOIDO! Dê um desconto de 1 real no 
preço do produto, guardando o novo preço na mesma 
variável