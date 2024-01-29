const resultReceita = document.getElementById('resultReceita')
const titleReceita = document.getElementById('titleReceita')
const resultDespesa = document.getElementById('resultDespesa')
const titleDespesa = document.getElementById('titleDespesa')
const resultBalanco = document.getElementById('resultBalanco')
const titleBalanco = document.getElementById('titleBalanco')
const inputValor = document.getElementById('valor')
const inputDespesa = document.getElementById('despesa')
const buttonAdd = document.getElementById('buttonAdd')
const buttonDel = document.getElementById('buttonDel')

let valorReceita = 0
let valorDespesa = 0

inputValor.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        cadastrarValor()
    }
})

inputDespesa.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        cadastrarDespesa()
    }
})


buttonAdd.addEventListener('click', () => {
    cadastrarValor()
    balanco()
})

buttonDel.addEventListener('click', () => {
    cadastrarDespesa()
    balanco()
})

function cadastrarValor(){
    let valorNumero = parseInt(inputValor.value)
    valorReceita += valorNumero
    console.log(valorReceita)

    titleReceita.innerText = "Total de Receitas"

    resultReceita.innerHTML = valorReceita
    
}

function cadastrarDespesa(){
    let valorNumero = parseInt(inputDespesa.value)
    valorDespesa += valorNumero
    console.log(valorDespesa)

    titleDespesa.innerText = "Total de Despesas"

    resultDespesa.innerHTML = valorDespesa
    
}

function balanco(){
    let balanco = valorReceita - valorDespesa
    console.log(balanco)

    titleBalanco.innerText = "Balanço"

    resultBalanco.innerHTML = balanco
}