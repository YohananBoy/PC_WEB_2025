let url = `https://rafaelescalfoni.github.io/desenv_web/filmes.json`
const objetoHTTPRequest = new XMLHttpRequest()
objetoHTTPRequest.open("GET", url)
objetoHTTPRequest.send()
objetoHTTPRequest.onreadystatechange = function () {
  if (objetoHTTPRequest.readyState == 4) {
    if (objetoHTTPRequest.status == 200) {
      const filmes = JSON.parse(objetoHTTPRequest.responseText)
      console.log("Resposta ta pronta e ok")
      console.log(filmes)
      const ulFilmes = document.querySelector("#filmesLista")

      filmes.forEach((elemento) => {
        liObj = document.createElement("li")
        ulFilmes.appendChild(liObj)

        const figura = document.createElement("img")
        figura.src = elemento.figura
        liObj.appendChild(figura)

        const titulo = document.createElement("h2")
        titulo.textContent = elemento.titulo
        liObj.appendChild(titulo)

        const resumo = document.createElement("p")
        resumo.textContent = elemento.resumo
        liObj.appendChild(resumo)

        const generos = document.createElement("ul")
        generos.classList.add("lista-generos")
        const tituloGenerosLi = document.createElement("li")
        const tituloGenerosH3 = document.createElement("h3")
        tituloGenerosH3.textContent = "Gêneros"
        tituloGenerosLi.appendChild(tituloGenerosH3)
        generos.appendChild(tituloGenerosLi)
        elemento.generos.forEach((genero) => {
          const generoLi = document.createElement("li")
          generoLi.textContent = genero
          generos.appendChild(generoLi)
        })
        liObj.appendChild(generos)

        const titulosSemelhantes = document.createElement("ul")
        titulosSemelhantes.classList.add("lista-titulos-semelhantes")
        const tituloSemelhanteLi = document.createElement("li")
        const tituloSemelhanteH3 = document.createElement("h3")
        tituloSemelhanteH3.textContent = "Títulos Semelhantes"
        tituloSemelhanteLi.appendChild(tituloSemelhanteH3)
        titulosSemelhantes.appendChild(tituloSemelhanteLi)
        elemento.titulosSemelhantes.forEach((semelhante) => {
          const semelhanteLi = document.createElement("li")
          const filmeSemelhante = filmes.find((filme) => filme.id == semelhante)
          semelhanteLi.textContent = filmeSemelhante.titulo
          titulosSemelhantes.appendChild(semelhanteLi)
        })
        liObj.appendChild(titulosSemelhantes)

        const elenco = document.createElement("ul")
        elenco.classList.add("lista-elenco")
        const tituloElencoLi = document.createElement("li")
        const tituloElencoH3 = document.createElement("h3")
        tituloElencoH3.textContent = "Elenco"
        tituloElencoLi.appendChild(tituloElencoH3)
        elenco.appendChild(tituloElencoLi)
        elemento.elenco.forEach((membro) => {
          const membroLi = document.createElement("li")
          membroLi.textContent = membro
          elenco.appendChild(membroLi)
        })
        liObj.appendChild(elenco)

        const containerListas = document.createElement("div")
        containerListas.classList.add("container")
        containerListas.appendChild(generos)
        containerListas.appendChild(titulosSemelhantes)
        containerListas.appendChild(elenco)

        liObj.appendChild(containerListas)
      })

    }
  }
}

