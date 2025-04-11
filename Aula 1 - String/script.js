const butao = document.querySelector("#butao")
const limpar = document.querySelector("#clear")

limpar.onclick = () => {
  document.querySelector("#resultado").innerHTML = ""
}

const pegaFrase = (seletor) => document.querySelector(seletor).value

const inverteFrase = (frase) => {
  for (let i = 0; i < frase.length; i++) {
    let palavraInvertida = ""
    for (let j = frase[i].length - 1; j >= 0; j--) {
      palavraInvertida += frase[i][j]
    }
    frase[i] = palavraInvertida
  }
  return frase
}

const escreveFrase = (frase, seletor) => {
  document.querySelector(seletor).innerHTML += frase + "<br/>"
}

const questao1 = () => {
  let fraseQuestao1 = pegaFrase("#frase").split(" ")
  let fraseQuestao1Invertida = inverteFrase(fraseQuestao1)
  escreveFrase(`Questão 1: ${fraseQuestao1Invertida.join(" ")}`, "#resultado")
}

butao.addEventListener("click", questao1)

const temVogal = (frase) => {
  let vogalNegrito = []
  for (let i = 0; i < frase.length; i++) {
    let palavra = ""
    for (let j = 0; j < frase[i].length; j++) {
      let letra = frase[i][j]
      if (
        letra.toLowerCase() == "a" ||
        letra.toLowerCase() == "e" ||
        letra.toLowerCase() == "i" ||
        letra.toLowerCase() == "o" ||
        letra.toLowerCase() == "u"
      ) {
        palavra += `<strong>${letra}</strong>`
      } else palavra += letra
    }
    vogalNegrito[i] = palavra
  }
  return vogalNegrito
}

const questao2 = () => {
  let fraseQuestao2 = pegaFrase("#frase").split(" ")
  let fraseNegrito = temVogal(fraseQuestao2)
  escreveFrase(`Questão 2: ${fraseNegrito.join(" ")}`, "#resultado")
}

butao.addEventListener("click", questao2)

const contaPalavra = (frase) => {
  contador = {}
  for (let i = 0; i < frase.length; i++) {
    let palavra = frase[i]
    if (contador[palavra]) {
      contador[palavra] += 1
    } else contador[palavra] = 1
  }
  return contador
}

const criaTabela = (contador) => {
  let tabela = "<table>"

  const palavras = Object.entries(contador)
  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i][0]
    const quantidade = palavras[i][1]

    tabela += `<tr><td>${palavra}</td><td>${quantidade}</td></tr>`
  }

  tabela += "</table>"

  document.querySelector("#resultado").innerHTML += "Questão 3" + tabela
}

const questao3 = () => {
  const fraseQuestao3 = pegaFrase("#frase").split(" ")
  const palavrasRepetidas = contaPalavra(fraseQuestao3)
  criaTabela(palavrasRepetidas)
}

butao.addEventListener("click", questao3)
