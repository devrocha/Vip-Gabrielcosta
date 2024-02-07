const cep = document.getElementById('cep')
const cidade = document.getElementById('cidade')
const rua = document.getElementById('rua')
const uf = document.getElementById('uf')
const bairro = document.getElementById('bairro')
const numero = document.getElementById('numero')

async function consultaCep(cep) {
    try {
        const viaCepJson = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await viaCepJson.json()
        preencheFormulario(data)
    } catch (error) {
        console.log(error)
    }
}

function preencheFormulario(data){
    cidade.value = data.localidade
    rua.value = data.logradouro
    uf.value = data.uf
    bairro.value = data.bairro
}

cep.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        consultaCep(event.target.value)
    }
})