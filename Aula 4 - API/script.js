const cepIpt = document.querySelector("#cep")
cepIpt.addEventListener("change", () => {
    let cepDesejado = cepIpt.value
    let url = `https://viacep.com.br/ws/${cepDesejado}/json/`
    const objetoHTTPRequest = new XMLHttpRequest()
    objetoHTTPRequest.open("GET", url)
    objetoHTTPRequest.send()
    objetoHTTPRequest.onreadystatechange = function () {
        if (objetoHTTPRequest.readyState == 4) {
            if (objetoHTTPRequest.status == 200) {
                const resposta = JSON.parse(objetoHTTPRequest.responseText)
                console.log("Resposta ta pronta e ok")
                console.log(resposta)
                const enderecoDiv = document.querySelector("#endereco")
                enderecoDiv.innerHTML = resposta.logradouro
            }
        }
    }
})