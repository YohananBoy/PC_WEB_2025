const url = "https://pokeapi.co/api/v2/pokemon?limit=100000"

fetch(url).then(resposta => resposta.json())
    .then(resposta => {
        console.log(resposta)
        const nomesUl = document.querySelector("#nomes")
        resposta.results.forEach(elemento => {
            const liObj = document.createElement("li")
            nomesUl.appendChild(liObj)
            const nomeTitulo = document.createElement("h2")
            nomeTitulo.textContent = elemento.name.replace(/-/g, " ").split(" ").map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ")
            liObj.appendChild(nomeTitulo)

            const urlTemporaria = elemento.url
            fetch(urlTemporaria).then(pokemon => pokemon.json())
                .then(pokemon => {
                    const foto = document.createElement("img")
                    foto.src = pokemon.sprites.front_default
                    liObj.appendChild(foto)
                })


        })
    })