const butao1 = document.querySelector("#butao1")

const limpar1 = document.querySelector("#clear1")

const select1 = document.querySelector("#select1")

limpar1.onclick = () => {
  document.querySelector("#resultado1").innerHTML = ""
}

pegaInput = (seletor) => {
  return document.querySelector(seletor).value
}

escreveInput = (input, seletor) => {
  document.querySelector(seletor).innerHTML = input
}

const sum = (array) => {
  let aux = 0
  array.forEach((numero) => {
    aux += numero
  })

  return aux
}

const sumOdds = (array) => {
  let aux = 0
  array.forEach((numero) => {
    if (numero % 2 != 0) {
      aux += numero
    }
  })

  return aux
}

const product = (array) => {
  let aux = 1
  array.forEach((numero) => {
    aux *= numero
  })

  return aux
}

const questao1 = () => {
  const arrayQuestao1 = pegaInput("#input1").split(", ").map(Number)

  switch (select1.value) {
    case "sum":
      escreveInput(sum(arrayQuestao1), "#resultado1")
      break
    case "sumOdds":
      escreveInput(sumOdds(arrayQuestao1), "#resultado1")
      break
    case "product":
      escreveInput(product(arrayQuestao1), "#resultado1")
      break
  }
}

butao1.addEventListener("click", questao1)

const butao2 = document.querySelector("#butao2")

const limpar2 = document.querySelector("#clear2")

limpar2.onclick = () => {
  document.querySelector("#resultado2").innerHTML = ""
}

const intervalo = (array) => {
  let arrayAux = []
  if (array.length == 1) {
    for (let i = 1; i <= array[0]; i++) {
      arrayAux[i - 1] = i
    }

    return arrayAux
  } else if (array.length == 2) {
    let j = 0
    for (let i = array[0]; i <= array[1]; i++) {
      arrayAux[j] = i
      j++
    }

    return arrayAux
  }
}

const numeroPrimo = (array) => {
  let numerosPrimos = []

  array.forEach((numero) => {
    if (numero < 2) return

    if (numero == 2) numerosPrimos.push(2)

    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) break
      if (i == numero - 1) numerosPrimos.push(numero)
    }
  })

  return numerosPrimos
}

const questao2 = () => {
  const inputQuestao2 = pegaInput("#input2").split(", ").map(Number)
  const resultado = numeroPrimo(intervalo(inputQuestao2))
  escreveInput(resultado, "#resultado2")
}

butao2.addEventListener("click", questao2)
