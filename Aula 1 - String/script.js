const butao1 = document.querySelector("#butao1")
const butao2 = document.querySelector("#butao2")
const butao3 = document.querySelector("#butao3")
const butao4 = document.querySelector("#butao4")
const butao5 = document.querySelector("#butao5")
const butao6 = document.querySelector("#butao6")
// const butao7 = document.querySelector("#butao7")
// const butao8 = document.querySelector("#butao8")
// const butao9 = document.querySelector("#butao9")
// const butao10 = document.querySelector("#butao10")

const limpar1 = document.querySelector("#clear1")
const limpar2 = document.querySelector("#clear2")
const limpar3 = document.querySelector("#clear3")
const limpar4 = document.querySelector("#clear4")
const limpar5 = document.querySelector("#clear5")
const limpar6 = document.querySelector("#clear6")
// const limpar7 = document.querySelector("#clear7")
// const limpar8 = document.querySelector("#clear8")
// const limpar9 = document.querySelector("#clear9")
// const limpar10 = document.querySelector("#clear10")

limpar1.onclick = () => {
  document.querySelector("#resultado1").innerHTML = ""
}

limpar2.onclick = () => {
  document.querySelector("#resultado2").innerHTML = ""
}

limpar3.onclick = () => {
  document.querySelector("#resultado3").innerHTML = ""
}

limpar4.onclick = () => {
  document.querySelector("#resultado4").innerHTML = ""
}

limpar5.onclick = () => {
  document.querySelector("#resultado5").innerHTML = ""
  document.querySelector("#frase5").style.display = "block"
  document.querySelector("#substituir").style.display = "none"
}

limpar6.onclick = () => {
  document.querySelector("#resultado6").innerHTML = ""
}

// limpar7.onclick = () => {
//   document.querySelector("#resultado7").innerHTML = ""
// }

// limpar8.onclick = () => {
//   document.querySelector("#resultado8").innerHTML = ""
// }

// limpar9.onclick = () => {
//   document.querySelector("#resultado9").innerHTML = ""
// }

// limpar10.onclick = () => {
//   document.querySelector("#resultado10").innerHTML = ""
// }

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
  let fraseQuestao1 = pegaFrase("#frase1").split(" ")
  let fraseQuestao1Invertida = inverteFrase(fraseQuestao1)
  escreveFrase(`${fraseQuestao1Invertida.join(" ")}`, "#resultado1")
}

butao1.addEventListener("click", questao1)

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
  let fraseQuestao2 = pegaFrase("#frase2").split(" ")
  let fraseNegrito = temVogal(fraseQuestao2)
  escreveFrase(`${fraseNegrito.join(" ")}`, "#resultado2")
}

butao2.addEventListener("click", questao2)

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

  document.querySelector("#resultado3").innerHTML += tabela
}

const questao3 = () => {
  const fraseQuestao3 = pegaFrase("#frase3").split(" ")
  const palavrasRepetidas = contaPalavra(fraseQuestao3)
  criaTabela(palavrasRepetidas)
}

butao3.addEventListener("click", questao3)

const maiorOcorrencia = (frase) => {
  const fraseOcorrencia = frase.split(" ")
  const objOcorrencias = contaPalavra(fraseOcorrencia)
  const ocorrencias = Object.entries(objOcorrencias)

  let maiorQtd = 0
  let maiorPalavra
  for (let i = 0; i < ocorrencias.length; i++) {
    if (maiorQtd < ocorrencias[i][1]) {
      maiorQtd = ocorrencias[i][1]
      maiorPalavra = ocorrencias[i][0]
    }
  }

  return [maiorPalavra, maiorQtd]
}

const questao4 = () => {
  const fraseQuestao4 = pegaFrase("#frase4")
  const [palavraQuestao4, qtdQuestao4] = maiorOcorrencia(fraseQuestao4)
  escreveFrase(
    `Maior ocorrência = ${palavraQuestao4}, Ocorrências: ${qtdQuestao4}`,
    "#resultado4"
  )
}

butao4.addEventListener("click", questao4)

const substitui = (frase, palavraProcurada, palavraSubstituicao) => {
  const fraseSubstitui = frase.split(" ")

  for (let i = 0; i < fraseSubstitui.length; i++) {
    if (fraseSubstitui[i] == palavraProcurada) {
      fraseSubstitui[i] = palavraSubstituicao
    }
  }

  return fraseSubstitui.join(" ")
}

const questao5 = () => {
  let fraseQuestao5 = document.querySelector("#frase5")
  const divQuestao5 = document.querySelector("#substituir")

  if (fraseQuestao5.style.display != "none") {
    fraseSalva = fraseQuestao5.value
    escreveFrase(fraseSalva, "#resultado5")
    fraseQuestao5.style.display = "none"
    divQuestao5.style.display = "flex"
  } else {
    const procurar = document.querySelector("#procurar5").value
    const substituir = document.querySelector("#substituir5").value

    fraseSalva = substitui(fraseSalva, procurar, substituir)
    escreveFrase(fraseSalva, "#resultado5")
  }
}

butao5.addEventListener("click", questao5)

const mesPorExtenso = (mes) => {
  let resultado
  switch (parseInt(mes, 10)) {
    case 1:
      resultado = "janeiro"
      break
    case 2:
      resultado = "fevereiro"
      break
    case 3:
      resultado = "março"
      break
    case 4:
      resultado = "abril"
      break
    case 5:
      resultado = "maio"
      break
    case 6:
      resultado = "junho"
      break
    case 7:
      resultado = "julho"
      break
    case 8:
      resultado = "agosto"
      break
    case 9:
      resultado = "setembro"
      break
    case 10:
      resultado = "outubro"
      break
    case 11:
      resultado = "novembro"
      break
    case 12:
      resultado = "dezembro"
      break
    default:
      resultado = `${mes}`
  }

  return resultado
}

const dataPorExtenso = (data) => {
  const dataArray = data.split("/")
  const resultado = `Dia ${dataArray[0]} de ${mesPorExtenso(dataArray[1])} de ${
    dataArray[2]
  }`
  return resultado
}

const questao6 = () => {
  const dataQuestao6 = pegaFrase("#frase6")
  escreveFrase(dataPorExtenso(dataQuestao6), "#resultado6")
}

butao6.addEventListener("click", questao6)
