const dominio = "https://rafaelescalfoni.github.io/desenv_web/restaurante/"
const servico = dominio + "items.json"

// //criou um objeto
// const objRequest = new XMLHttpRequest()
// //abriu e setou o método e a url
// objRequest.open("GET", servico)
// //mandou a requisição
// objRequest.send()

// objRequest.onreadystatechange = function() {
//     if(objRequest.readyState == 4 && objRequest.status == 200) {
//         let cardapio = JSON.parse(objRequest.responseText)
//     }
// }

fetch(servico).then(respostaDoServidor => respostaDoServidor.json())
.then(respostaDaPromise => {
    let cardapio = respostaDaPromise
    
    cardapio.forEach(elemento => {
            const divMain = document.getElementById("main-content")
            const divItem = document.createElement("div")
            divMain.appendChild(divItem)
            const h2Item = document.createElement("h2")
            divItem.appendChild(h2Item)
            const imgItem = document.createElement("img")
            divItem.appendChild(imgItem)

            h2Item.textContent = elemento.name || elemento.title
            
            imgItem.src = dominio + elemento.photo
    })
})