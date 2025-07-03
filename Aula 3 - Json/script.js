const ulReceitas = document.querySelector("#receitasLista")

receitas.forEach(elemento => {
    console.log(elemento.nome)
    liObj = document.createElement("li")
    liObj.textContent = elemento.nome
    ulReceitas.appendChild(liObj)

    const descricao = document.createElement("p")
    descricao.textContent = elemento.descricao
    liObj.appendChild(descricao)

    const foto = document.createElement("img")
    foto.src = elemento.foto
    liObj.appendChild(foto)
})