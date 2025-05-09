const palavras = [
  "macaco",
  "balão",
  "cabeludo",
  "fortnite",
  "rpgdocellbit",
  "pod",
  "vape",
  "marquesfumantedepod",
  "ocultismo",
  "paganismo",
]

const palavraAleatoria = (array) => {
  let qtd = palavras.length
  let ind = Math.trunc(Math.random() * qtd)
  return palavras[ind]
}

let palavraSorteada = ""

const display = () => {
  palavraSorteada = palavraAleatoria(palavras).toUpperCase()
  let lista = document.querySelector("#lista")

  for (let i = 0; i < palavraSorteada.length; i++) {
    const elemento = document.createElement("li")
    const texto = document.createTextNode(" ? ")
    elemento.appendChild(texto)
    lista.appendChild(elemento)
  }
}

display()

const btn = document.querySelector("#btn")

const controle = document.querySelector("#controle")
let tentativas = 5

controle.innerHTML = `Tentativas Restantes: ${tentativas}`

const verificaPalavra = () => {
  letra = document.querySelector("#tentativa").value.toUpperCase()
  const listaLetra = document.querySelectorAll("#lista li")

  if (!/[A-Z]/.test(letra)) {
    document.querySelector("#tentativa").value = "É UMA LETRA"
    return
  }

  if (letra.length > 1) {
    if (letra == palavraSorteada) {
      for (let i = 0; i < palavraSorteada.length; i++) {
        listaLetra[i].innerHTML = palavraSorteada[i]
        listaLetra[i].style.color = "#fff"
      }
    } else {
      tentativas--
      controle.innerHTML = `Tentativas Restantes: ${tentativas}`
      return
    }
  } else {
    for (let i = 0; i < palavraSorteada.length; i++) {
      if (letra == palavraSorteada[i]) {
        listaLetra[i].innerHTML = palavraSorteada[i]
        listaLetra[i].style.color = "#fff"
      }
    }

    if (!palavraSorteada.includes(letra)) {
      tentativas--
    }

    document.querySelector("#tentativa").value = ""
    controle.innerHTML = `Tentativas Restantes: ${tentativas}`
  }
}

btn.addEventListener("click", verificaPalavra)
