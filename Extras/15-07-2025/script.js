const inputPokemon = document.querySelector("#inputPokemon")
const listaSugestoes = document.querySelector("#sugestoes")
const btnSubmit = document.querySelector("#btnSubmit")

fetch("https://pokeapi.co/api/v2/pokemon?limit=1300")
  .then((res) => res.json())
  .then((data) => {
    nomesPokemon = data.results.map((p) => p.name)
  })
  .catch((err) => {
    console.error("ixi deu ruim pai", err)
  })

inputPokemon.addEventListener("input", () => {
  const texto = inputPokemon.value.toLowerCase()
  listaSugestoes.innerHTML = ""

  if (texto.length === 0) return

  const filtrados = nomesPokemon
    .filter((nome) => nome.startsWith(texto))
    .slice(0, 10)

  filtrados.forEach((nome) => {
    const li = document.createElement("li")
    li.textContent = nome
    li.addEventListener("click", () => {
      inputPokemon.value = nome
      listaSugestoes.innerHTML = ""
    })
    listaSugestoes.appendChild(li)
  })
})

document.addEventListener("click", (e) => {
  if (!inputPokemon.contains(e.target) && !listaSugestoes.contains(e.target)) {
    listaSugestoes.innerHTML = ""
  }
})

const buscarPokemon = () => {
  let pokemonPesquisado = inputPokemon.value.toLowerCase()
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemonPesquisado}`

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Pokémon não encontrado")
      return response.json()
    })
    .then((pokemon) => {
      console.log(pokemon)

      const divPokemon = document.querySelector("#divPokemon")
      divPokemon.innerHTML = ""

      const nome = document.createElement("h2")
      nome.textContent = pokemon.name.toUpperCase() + " #" + pokemon.id
      divPokemon.appendChild(nome)

      const figura = document.createElement("img")
      figura.src = pokemon.sprites.front_default
      divPokemon.appendChild(figura)

      // Tipos
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

      // Status
      const divStatus = document.createElement("div")
      divStatus.classList.add("status")
      divPokemon.appendChild(divStatus)

      const tituloStatus = document.createElement("h3")
      tituloStatus.textContent = "Status"
      divStatus.appendChild(tituloStatus)

      const status = document.createElement("ul")
      pokemon.stats.forEach((elemento) => {
        const statusLi = document.createElement("li")
        statusLi.textContent = `${elemento.stat.name}: ${elemento.base_stat}`
        status.appendChild(statusLi)
      })
      divStatus.appendChild(status)

      // Habilidades
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
        if (elemento.is_hidden) abilitiesLi.textContent += " (hidden)"
        abilities.appendChild(abilitiesLi)
      })
      divAbilities.appendChild(abilities)

      // Cries
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

      // Moves
      const divMoves = document.createElement("div")
      divMoves.classList.add("moves")
      divPokemon.appendChild(divMoves)

      const tituloMoves = document.createElement("h3")
      tituloMoves.textContent = "Movimentos Aprendidos"
      divMoves.appendChild(tituloMoves)

      const movesPorJogo = {}
      const promises = pokemon.moves.map((elemento) => {
        return fetch(elemento.move.url)
          .then((res) => res.json())
          .then((dadosMove) => {
            elemento.version_group_details.forEach((versao) => {
              const jogo = versao.version_group.name
              const nivel = versao.level_learned_at
              const metodo = versao.move_learn_method.name

              if (!movesPorJogo[jogo]) {
                movesPorJogo[jogo] = []
              }

              movesPorJogo[jogo].push({
                nome: elemento.move.name,
                nivel: nivel,
                metodo: metodo,
                power: dadosMove.power,
                accuracy: dadosMove.accuracy,
                pp: dadosMove.pp,
                priority: dadosMove.priority,
                classe: dadosMove.damage_class.name,
                tipo: dadosMove.type.name,
              })
            })
          })
      })

      Promise.all(promises).then(() => {
        for (const jogo in movesPorJogo) {
          const tituloJogo = document.createElement("h4")
          tituloJogo.textContent = jogo
          divMoves.appendChild(tituloJogo)

          const tabela = document.createElement("table")
          tabela.classList.add("tabela-moves")

          const thead = document.createElement("thead")
          thead.innerHTML = `
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Classe</th>
              <th>Power</th>
              <th>Accuracy</th>
              <th>PP</th>
              <th>Priority</th>
              <th>Nível</th>
              <th>Método</th>
            </tr>`
          tabela.appendChild(thead)

          const tbody = document.createElement("tbody")
          movesPorJogo[jogo].forEach((move) => {
            const linha = document.createElement("tr")
            linha.innerHTML = `
              <td>${move.nome}</td>
              <td>${move.tipo}</td>
              <td>${move.classe}</td>
              <td>${move.power ?? "-"}</td>
              <td>${move.accuracy ?? "-"}</td>
              <td>${move.pp ?? "-"}</td>
              <td>${move.priority}</td>
              <td>${move.nivel}</td>
              <td>${move.metodo}</td>`
            tbody.appendChild(linha)
          })

          tabela.appendChild(tbody)
          divMoves.appendChild(tabela)
        }
      })
    })
    .catch((erro) => {
      console.error(erro)
      alert("ixi deu ruim pai")
    })
}

btnSubmit.addEventListener("click", buscarPokemon)
inputPokemon.addEventListener("change", buscarPokemon)
