//Exercicio 1

/*function adicionaItem(event) {
    let novoItem = document.createElement("article")
    let conteudoItem = document.createTextNode("item")
    novoItem.appendChild(conteudoItem)
    const elementoReferencia = document.getElementById("container")
    elementoReferencia.insertAdjacentElement("beforeend", novoItem)
}*/


//Exercicio 2
const container=document.getElementById("container")

function adicionaItem (event){
    const novoArticle=document.createElement("article")
    novoArticle.classList.add("item")
    novoArticle.setAttribute("onclick","removeItem(event)")
    container.appendChild(novoArticle) 
    
}

//Exercicio 3
function removeItem (event) {
    event.target.remove()
    
}