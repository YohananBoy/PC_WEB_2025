const inputPokemon = document.querySelector("#inputPokemon")
const btnSubmit = document.querySelector("#btnSubmit")
const buscarPokemon = () => {
  let pokemonPesquisado = inputPokemon.value
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemonPesquisado}`
  const objetoHTTPRequest = new XMLHttpRequest()
  objetoHTTPRequest.open("GET", url)
  objetoHTTPRequest.send()
  objetoHTTPRequest.onreadystatechange = function () {
    if (objetoHTTPRequest.readyState == 4) {
      if (objetoHTTPRequest.status == 200) {
        const pokemon = JSON.parse(objetoHTTPRequest.responseText)
        console.log("Resposta ta pronta e ok")
        console.log(pokemon)
        const divPokemon = document.querySelector("#divPokemon")
        divPokemon.innerHTML = ""

        const nome = document.createElement("h2")
        nome.textContent = pokemon.name.toUpperCase()
        divPokemon.appendChild(nome)

        const figura = document.createElement("img")
        figura.src = pokemon.sprites.front_default
        divPokemon.appendChild(figura)

        const divTipos = document.createElement("div")
        divTipos.classList.add("tipos")
        divPokemon.appendChild(divTipos)

        const tituloTipos = document.createElement("h3")
        tituloTipos.textContent = "Tipos"
        divTipos.appendChild(tituloTipos)

        const tipos = document.createElement("ul")
        pokemon.types.forEach((elemento) => {
          const nomeTipo = document.createElement("li")
          nomeTipo.textContent = elemento.type.name
          tipos.appendChild(nomeTipo)
        })
        divTipos.appendChild(tipos)

        const divStatus = document.createElement("div")
        divStatus.classList.add("status")
        divPokemon.appendChild(divStatus)

        const tituloStatus = document.createElement("h3")
        tituloStatus.textContent = "Status"
        divStatus.appendChild(tituloStatus)

        const status = document.createElement("ul")
        pokemon.stats.forEach((elemento) => {
          const statusLi = document.createElement("li")
          statusLi.textContent = elemento.stat.name + ": " + elemento.base_stat
          status.appendChild(statusLi)
        })
        divStatus.appendChild(status)

        const divAbilities = document.createElement("div")
        divAbilities.classList.add("abilities")
        divPokemon.appendChild(divAbilities)

        const tituloAbilities = document.createElement("h3")
        tituloAbilities.textContent = "Habilidades"
        divAbilities.appendChild(tituloAbilities)

        const abilities = document.createElement("ul")
        pokemon.abilities.forEach((elemento) => {
          const abilitiesLi = document.createElement("li")
          abilitiesLi.textContent = elemento.ability.name
          if (elemento.is_hidden) {
            abilitiesLi.textContent += " (hidden)"
          }
          abilities.appendChild(abilitiesLi)
        })
        divAbilities.appendChild(abilities)

        const divCries = document.createElement("div")
        divCries.classList.add("cries")
        divPokemon.appendChild(divCries)

        const tituloCries = document.createElement("h3")
        tituloCries.textContent = "Cries"
        divCries.appendChild(tituloCries)

        const cries = document.createElement("ul")

        for (const tipo in pokemon.cries) {
          const liCrie = document.createElement("li")

          const label = document.createElement("span")
          label.textContent = tipo + ": "

          const somCrie = document.createElement("audio")
          somCrie.src = pokemon.cries[tipo]
          somCrie.controls = true

          liCrie.appendChild(label)
          liCrie.appendChild(somCrie)
          cries.appendChild(liCrie)
        }
        divCries.appendChild(cries)

        const divMoves = document.createElement("div")
        divMoves.classList.add("moves")
        divPokemon.appendChild(divMoves)

        const tituloMoves = document.createElement("h3")
        tituloMoves.textContent = "Movimentos Aprendidos"
        divMoves.appendChild(tituloMoves)

        const moves = document.createElement("ul")
        moves.classList.add("lista-movimentos")
        divMoves.appendChild(moves)

        const movesPorJogo = {}

        pokemon.moves.forEach((elemento) => {
          const nomeMove = elemento.move.name

          elemento.version_group_details.forEach((versao) => {
            const jogo = versao.version_group.name
            const nivel = versao.level_learned_at
            const metodo = versao.move_learn_method.name

            if (!movesPorJogo[jogo]) {
              movesPorJogo[jogo] = []
            }

            movesPorJogo[jogo].push({
              nome: nomeMove,
              nivel: nivel,
              metodo: metodo,
            })
          })
        })

        for (const jogo in movesPorJogo) {
          const divMoveJogo = document.createElement("div")
          const tituloJogo = document.createElement("h4")
          tituloJogo.textContent = jogo
          divMoveJogo.appendChild(tituloJogo)

          const listaMoves = document.createElement("ul")

          movesPorJogo[jogo].forEach((move) => {
            const li = document.createElement("li")
            li.textContent = `${move.nome} | Nível: ${move.nivel} | Método: ${move.metodo}`
            listaMoves.appendChild(li)
          })

          divMoveJogo.appendChild(listaMoves)
          moves.appendChild(divMoveJogo)
        }
        divPokemon.appendChild(divMoves)
      } else {
        alert("Pokémon não encontrado!")
      }
    }
  }
}

btnSubmit.addEventListener("click", buscarPokemon)
inputPokemon.addEventListener("change", buscarPokemon)
