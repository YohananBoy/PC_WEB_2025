const palavras = ["macaco", "balão", "cabeludo", "fortnite", "rpgdocelbit", "pod", "vape", "marquesfumantedepod", "ocultismo", "paganismo"];

const palavraAleatoria = array => {
    let qtd = palavras.length
    let ind = Math.trunc((Math.random() * qtd))
    return palavras[ind];
}

const display = palavra => {
    let lista = document.querySelector("#lista")

    for (let i = 0; i < palavra.length; i++) {
        const elemento = document.createElement("li")
        const texto = document.createTextNode(" ")
        elemento.appendChild(texto)
        lista.appendChild(elemento)
    }
}

display(palavraAleatoria(palavras))

const verificaPalavra = (letra, palavra) => {
    
}