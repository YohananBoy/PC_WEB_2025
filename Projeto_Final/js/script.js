const btnConsultarLivros = document.querySelector("#consultarLivros")
const btnListarTodosLivros = document.querySelector("#listarLivros")
const btnCadastrarLivro = document.querySelector("#cadastrarLivro")
const btnRegistrarRetirada = document.querySelector("#registrarRetirada")
const divSaida = document.querySelector("#saidaBusca")
const divCadastro = document.querySelector("#saida")
const inputBusca = document.querySelector("#busca")
const inputRetirada = document.querySelector("#issnRetirada")
const inputIssn = document.querySelector("#novoIssn")
const inputTitulo = document.querySelector("#novoTitulo")
const inputAutor = document.querySelector("#novoAutor")
const inputEditora = document.querySelector("#novoEditora")
const inputAno = document.querySelector("#novoAno")
const inputGenero = document.querySelector("#novoGenero")
const inputLocal = document.querySelector("#novoLocal")

/**
 * Função construtora de Exemplares da Biblioteca
 * @param {*} issn
 * @param {*} titulo
 * @param {*} autor
 * @param {*} editora
 * @param {*} ano
 * @param {*} genero
 * @param {*} local
 * @param {*} disponivel
 */
function Livro(issn, titulo, autor, editora, ano, genero, local, disponivel) {
  this.issn = issn
  this.titulo = titulo
  this.autor = autor
  this.editora = editora
  this.ano = ano
  this.genero = genero
  this.local = local
  this.disponivel = disponivel
}

function pegaDadosFormulario() {
  return {
    id: null,
    titulo: inputTitulo.value,
    autor: inputAutor.value,
    editora: inputEditora.value,
    anoPublicacao: inputAno.value,
    genero: inputGenero.value,
    localizacao: inputLocal.value,
    ISSN: inputIssn.value,
    disponivel: true,
  }
}

async function enviaLivroServidor(livro, metodo) {
  const resposta = await fetch(
    "http://localhost/Projeto_Final_Back/index.php?modulo=livro",
    {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livro),
    }
  )

  const dados = await resposta.json()
  return dados
}

/**
 * Função que deverá pegar os dados do formulário e gerar um novo
 * exemplar na lista de livros da biblioteca
 *
 */
async function cadastrarExemplar() {
  divCadastro.textContent = ""
  let novoLivro = pegaDadosFormulario()
  let resposta = await enviaLivroServidor(novoLivro, "POST")
  divCadastro.textContent = resposta.mensagem
}

async function pegaLivros() {
  const url = "http://localhost/Projeto_Final_Back/index.php?modulo=livro"

  let resposta = await fetch(url)
  let dados = await resposta.json()

  return dados
}

function filtraLivros(livros, filtro) {
  let saida = livros.filter(
    (livro) =>
      livro.titulo.toLowerCase().startsWith(filtro.toLowerCase()) ||
      livro.genero.toLowerCase().startsWith(filtro.toLowerCase()) ||
      livro.autor.toLowerCase().startsWith(filtro.toLowerCase())
  )

  return saida
}

function exibeLivros(livros) {
  divSaida.innerHTML = ""
  let ul = document.createElement("ul")
  livros.forEach((livro) => {
    let disponivel = Number(livro.disponivel) ? "Disponível" : "Não Disponível"
    let li = document.createElement("li")
    li.textContent = `${livro.ISSN} - ${livro.titulo} - ${livro.autor} - ${livro.anoPublicacao} - ${livro.genero} - ${livro.localizacao} - ${disponivel}`
    ul.appendChild(li)
  })
  divSaida.appendChild(ul)
}

/**
 * Função que deverá pegar o parâmetro de filtro e listar todos os
 * exemplares que satisfizerem a condição
 */
async function consultarLivros() {
  let dados = await pegaLivros()
  let livros = filtraLivros(dados, inputBusca.value)
  exibeLivros(livros)
}

/**
 * Função que deverá listar na tela todos os livros do acervo
 */
async function listarTodos() {
  let livros = await pegaLivros()
  exibeLivros(livros)
}

/**
 * Função que deverá marcar o exemplar como indisponível no acervo
 */
async function registrarRetirada() {
  let dados = await pegaLivros()
  dados.forEach((livro) => {
    if (livro.ISSN === inputRetirada.value) {
      livro.disponivel = 0
      enviaLivroServidor(livro, "PUT")
    }
  })
}

/*
 * Bloco de chamada de eventos
 */
btnCadastrarLivro.addEventListener("click", cadastrarExemplar)
btnConsultarLivros.addEventListener("click", consultarLivros)
btnListarTodosLivros.addEventListener("click", listarTodos)
btnRegistrarRetirada.addEventListener("click", registrarRetirada)
