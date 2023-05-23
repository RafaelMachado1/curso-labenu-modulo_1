const clientes = [
    {
      nome: "amanda",
      estado: "RN",
      empreendimento: [
        {
          tipo: "parque de diversões",
          estado: "SP"
        },
        {
          tipo: "casa de praia",
          estado: "AL"
        }
      ]
    },
    {
      nome: "filipe",
      estado: "SP",
      empreendimento: [
        {
          tipo: "clínica veterinária",
          estado: "SP"
        }
      ]
    },
    {
      nome: "jaziel",
      estado: "PR",
      empreendimento: []
    }
  ]
  
  //FOR
  for(let i = 0; i < clientes.length; i++){
    for(let j = 0; j < clientes[i].empreendimento.length; j++){
     console.log(clientes[i].empreendimento[j], clientes[i].nome)
    }

  }
  
  // FOR IN
  for(const cliente in clientes){
    //console.log(clientes[cliente])
    for(const cliente2 in clientes[cliente].empreendimento){
      //console.log(clientes[cliente].empreendimento[cliente2])
    }
  }
  
  //FOR OF
  for(const cliente of clientes){
    console.log(cliente)
    for(const cliente2 of cliente.empreendimento){
     console.log(cliente2)
    }
  }



//Fazer uma função para ver se pessoa pode tirar CNH

function verificaIdade(idade){
    if(idade < 18){
        //console.log("Tu não pode tirar carteira")
    }
}

//const idadeUsuario = Number(prompt("Digite a sua idade"))
//console.log(verificaIdade(idadeUsuario))

const verificaIdade2 = (idade) => {
    if(idade >= 18){
        console.log("Tu pode tirar carteira")
    }
}
//console.log(verificaIdade2(idadeUsuario))


//CALL-BACK: FUNÇÃO CHAMA FUNÇÃO

// filter()

const nomeFiltrado = clientes.filter((cliente) => {
  if(cliente.nome === "amanda"){
    return cliente
  }
})
console.log(nomeFiltrado)

const nomeFiltrado1 = clientes.filter((elemento) => {
  if(elemento.nome === "filipe"){
    return elemento
  }
})
console.log(nomeFiltrado1)



const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosMaioresQue5 = numeros.filter((elemento,
  indice, array) => {
    console.log(elemento, "elemento", indice, "indice",
    array, " array")

    if(elemento >= 5){
      return elemento
    }
  })
  console.log(numerosMaioresQue5)

 const numerosMenoresQue5 = numeros.filter(item => item <= 5)
 console.log(numerosMenoresQue5)

 //map()
 const numerosMenorQue5 = numeros.map(item => item * 5 )
 console.log(numerosMenorQue5)