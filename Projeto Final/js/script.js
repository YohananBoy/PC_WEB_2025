// Lista inicial de 50 livros
const biblioteca = [
  {
    issn: "1001",
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    editora: "Nova Fronteira",
    ano: 1899,
    genero: "Romance",
    local: "1-A",
    disponivel: true,
  },
  {
    issn: "1002",
    titulo: "O Cortiço",
    autor: "Aluísio Azevedo",
    editora: "Saraiva",
    ano: 1890,
    genero: "Naturalismo",
    local: "1-B",
    disponivel: true,
  },
  {
    issn: "1003",
    titulo: "Iracema",
    autor: "José de Alencar",
    editora: "Ática",
    ano: 1865,
    genero: "Romance",
    local: "1-C",
    disponivel: true,
  },
  {
    issn: "1004",
    titulo: "A Moreninha",
    autor: "Joaquim Manuel de Macedo",
    editora: "L&PM",
    ano: 1844,
    genero: "Romance",
    local: "1-D",
    disponivel: true,
  },
  {
    issn: "1005",
    titulo: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    editora: "Companhia das Letras",
    ano: 1881,
    genero: "Realismo",
    local: "1-E",
    disponivel: true,
  },
  {
    issn: "1006",
    titulo: "O Alienista",
    autor: "Machado de Assis",
    editora: "Martin Claret",
    ano: 1882,
    genero: "Sátira",
    local: "2-A",
    disponivel: true,
  },
  {
    issn: "1007",
    titulo: "Capitães da Areia",
    autor: "Jorge Amado",
    editora: "Record",
    ano: 1937,
    genero: "Romance",
    local: "2-B",
    disponivel: true,
  },
  {
    issn: "1008",
    titulo: "Gabriela, Cravo e Canela",
    autor: "Jorge Amado",
    editora: "Record",
    ano: 1958,
    genero: "Romance",
    local: "2-C",
    disponivel: true,
  },
  {
    issn: "1009",
    titulo: "Grande Sertão: Veredas",
    autor: "Guimarães Rosa",
    editora: "Globo",
    ano: 1956,
    genero: "Literatura Brasileira",
    local: "2-D",
    disponivel: true,
  },
  {
    issn: "1010",
    titulo: "Vidas Secas",
    autor: "Graciliano Ramos",
    editora: "Record",
    ano: 1938,
    genero: "Realismo",
    local: "2-E",
    disponivel: true,
  },
  {
    issn: "1011",
    titulo: "Senhora",
    autor: "José de Alencar",
    editora: "Martin Claret",
    ano: 1875,
    genero: "Romance",
    local: "3-A",
    disponivel: true,
  },
  {
    issn: "1012",
    titulo: "O Guarani",
    autor: "José de Alencar",
    editora: "Ática",
    ano: 1857,
    genero: "Romance",
    local: "3-B",
    disponivel: true,
  },
  {
    issn: "1013",
    titulo: "A Escrava Isaura",
    autor: "Bernardo Guimarães",
    editora: "Saraiva",
    ano: 1875,
    genero: "Romance",
    local: "3-C",
    disponivel: true,
  },
  {
    issn: "1014",
    titulo: "Triste Fim de Policarpo Quaresma",
    autor: "Lima Barreto",
    editora: "Penguin",
    ano: 1915,
    genero: "Sátira",
    local: "3-D",
    disponivel: true,
  },
  {
    issn: "1015",
    titulo: "Mar Morto",
    autor: "Jorge Amado",
    editora: "Record",
    ano: 1936,
    genero: "Romance",
    local: "3-E",
    disponivel: true,
  },
  {
    issn: "1016",
    titulo: "Sagarana",
    autor: "Guimarães Rosa",
    editora: "Nova Fronteira",
    ano: 1946,
    genero: "Contos",
    local: "4-A",
    disponivel: true,
  },
  {
    issn: "1017",
    titulo: "Fogo Morto",
    autor: "José Lins do Rego",
    editora: "José Olympio",
    ano: 1943,
    genero: "Regionalismo",
    local: "4-B",
    disponivel: true,
  },
  {
    issn: "1018",
    titulo: "A Hora da Estrela",
    autor: "Clarice Lispector",
    editora: "Rocco",
    ano: 1977,
    genero: "Ficção",
    local: "4-C",
    disponivel: true,
  },
  {
    issn: "1019",
    titulo: "O Primo Basílio",
    autor: "Eça de Queirós",
    editora: "Martin Claret",
    ano: 1878,
    genero: "Realismo",
    local: "4-D",
    disponivel: true,
  },
  {
    issn: "1020",
    titulo: "Os Maias",
    autor: "Eça de Queirós",
    editora: "Globo",
    ano: 1888,
    genero: "Realismo",
    local: "4-E",
    disponivel: true,
  },
]

const btnConsultarLivros = document.querySelector("#consultarLivros")
const btnListarTodosLivros = document.querySelector("#listarLivros")
const btnCadastrarLivro = document.querySelector("#cadastrarLivro")
const btnRegistrarRetirada = document.querySelector("#registrarRetirada")
const divSaida = document.querySelector("#saidaBusca")
const inputBusca = document.querySelector("#busca")
const inputRetirada = document.querySelector("#issnRetirada")

/**
 * Função construtora de Exemplares da Biblioteca
 * @param {*} issn
 * @param {*} titulo
 * @param {*} autor
 * @param {*} editora
 * @param {*} ano
 * @param {*} genero
 * @param {*} local
 * @param {*} disponibilidade
 */
function Livro(
  issn,
  titulo,
  autor,
  editora,
  ano,
  genero,
  local,
  disponibilidade
) {
  this.issn = issn
  this.titulo = titulo
  this.autor = autor
  this.editora = editora
  this.ano = ano
  this.genero = genero
  this.local = local
  this.disponivel = disponibilidade
}

/**
 * Função que deverá pegar os dados do formulário e gerar um novo
 * exemplar na lista de livros da biblioteca
 *
 */
function cadastrarExemplar() {
  //implemente seu código aqui
  console.log("chamando cadastrarExemplar")
}

async function pegaLivros() {
  const url = "http://localhost/Projeto_Final/index.php?modulo=livro"

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
    let li = document.createElement("li")
    li.textContent = `${livro.ISSN} - ${livro.titulo} - ${livro.autor} - ${livro.anoPublicacao} - ${livro.genero} - ${livro.localizacao}`
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
  dados.forEach((livro) => {
    if (livro.ISSN === inputRetirada.value) {
      livro.disponivel = false
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
