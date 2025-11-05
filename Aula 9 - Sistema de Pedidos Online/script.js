//Backend
const listaPedidos = []

function validarPedido(nome, item, valor, listaPedidos) {
  if (!nome || !item || valor == null)
    throw new Error("Todos os campos devem ser preenchidos")
  if (typeof nome !== "string" || typeof item !== "string")
    throw new Error("Nome e item devem ser strings")
  if (typeof valor !== "number" || valor <= 0)
    throw new Error("Valor deve ser um número positivo")
  if (!Array.isArray(listaPedidos))
    throw new Error("listaPedidos deve ser array")
}

function cadastrarPedido(nome, item, valor, listaPedidos) {
  try {
    validarPedido(nome, item, valor, listaPedidos)
    const pedido = {
      nome: nome,
      item: item,
      valor: valor,
    }
    listaPedidos.push(pedido)
    return `Pedido cadastrado com sucesso!`
  } catch (erro) {
    return `Erro: ${erro.message}`
  }
}

function listarPedidos(listaPedidos) {
  //Validando dados
  if (!Array.isArray(listaPedidos))
    throw new Error("listaPedidos deve ser array")

  return listaPedidos
    .map(
      (pedido) => `<li>${pedido.nome} - ${pedido.item}: R$${pedido.valor}</li>`
    )
    .join("")
}

function calcularTotal(listaPedidos) {
  //Validando dados
  if (!Array.isArray(listaPedidos))
    throw new Error("listaPedidos deve ser array")

  let soma = 0
  listaPedidos.forEach((pedido) => {
    soma += pedido.valor
  })

  return soma
}

function buscarPedidos(nome, listaPedidos) {
  //Validando dados
  if (!nome) throw new Error("Todos os campos devem ser preenchidos")
  if (typeof nome !== "string") throw new Error("Nome deve ser string")
  if (!Array.isArray(listaPedidos))
    throw new Error("listaPedidos deve ser array")

  return listaPedidos.filter((pedido) =>
    pedido.nome.toLowerCase().includes(nome.toLowerCase())
  )
}

//Frontend
const form = document.getElementById("formPedido")
const campoCliente = document.getElementById("cliente")
const campoItem = document.getElementById("item")
const campoValor = document.getElementById("valor")
const saida = document.getElementById("saida")

const btnListar = document.getElementById("btnListar")
const btnTotal = document.getElementById("btnTotal")
const btnBuscar = document.getElementById("btnBuscar")

// Cadastrar novo pedido
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const nome = campoCliente.value.trim()
  const item = campoItem.value.trim()
  const valor = Number(campoValor.value)
  const mensagem = cadastrarPedido(nome, item, valor, listaPedidos)
  saida.textContent = mensagem
  form.reset()
})

// Listar pedidos
btnListar.addEventListener("click", () => {
  saida.innerHTML = listarPedidos(listaPedidos)
})

// Calcular total
btnTotal.addEventListener("click", () => {
  saida.textContent = calcularTotal(listaPedidos)
})

// Buscar pedido por nome
btnBuscar.addEventListener("click", () => {
  const nome = prompt("Digite o nome do cliente:")
  const encontrados = buscarPedidos(nome, listaPedidos)

  if (encontrados.length === 0) {
    saida.textContent = `Nenhum pedido encontrado.`
  } else {
    saida.innerHTML = listarPedidos(encontrados)
  }
})
