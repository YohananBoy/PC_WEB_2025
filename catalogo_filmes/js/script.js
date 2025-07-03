const ulFilmes = document.querySelector("#filmesLista")

filmes.forEach(elemento => {
    console.log(elemento.nome)
    liObj = document.createElement("li")
    liObj.textContent = elemento.titulo
    ulFilmes.appendChild(liObj)

    const resumo = document.createElement("p")
    resumo.textContent = elemento.resumo
    liObj.appendChild(resumo)

    const generos = document.createElement("ul")
    elemento.generos.forEach(genero => {
        generoLi = document.createElement("li")
        generos.appendChild(generoLi)
    })

})