const input1 = document.querySelector("#input1")
const btn1 = document.querySelector("#btn1")

const input2 = document.querySelector("#input2")
const btn2 = document.querySelector("#btn2")

const pegaInput = (seletor) => {
  const input = document.querySelector(seletor)
  return input
}

const imprimeTexto = (frase, seletor) => {
  document.querySelector(seletor).innerHTML = `${frase} <br/>`
}

const letraMaiuscula = (frase) => {
  let fraseArray = frase.split(" ")
  let letra, novaPalavra
  for (let i = 0; i < fraseArray.length; i++) {
    letra = fraseArray[i][0].toUpperCase()
    novaPalavra = letra + fraseArray[i].slice(1)
    fraseArray[i] = novaPalavra
  }

  return fraseArray.join(" ")
}

const questao1 = () => {
  const inputQuestao1 = pegaInput("#input1").value
  const resposta = letraMaiuscula(inputQuestao1)
  imprimeTexto(resposta, "#p1")
}

btn1.addEventListener("click", questao1)

const armazenaString = (string) => {
  localStorage.setItem("item", string)
  imprimeTexto(localStorage.getItem("item"), "#p2")
}
const textoSalvo = localStorage.getItem("item")
if (textoSalvo) imprimeTexto(textoSalvo, "#p2")

const questao2 = () => {
  const inputQuestao2 = pegaInput("#input2").value
  armazenaString(inputQuestao2)
}

btn2.addEventListener("click", questao2)
