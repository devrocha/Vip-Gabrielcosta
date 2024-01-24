//DOM - document object model
const result = document.getElementById('result')
const title = document.getElementById('title')
const inputName = document.getElementById('name')
const inputFilter = document.getElementById('filter')
const buttonCreate = document.getElementById('buttonCreate')
const buttonFilter = document.getElementById('buttonFilter')

let arrayNames = []

inputName.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        cadastrarConvidado()
    }
})

inputFilter.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        filtrarLista()
    }
})

buttonCreate.addEventListener('click', () => {
    cadastrarConvidado()
})

buttonFilter.addEventListener('click', () => {
    filtrarLista()
})

function cadastrarConvidado(){
    arrayNames.push(inputName.value)
    console.log(arrayNames)

    title.innerText = "Convidados Cadastrados"

    result.innerHTML = arrayNames.join(' ')
    inputName.value = ''
    inputName.focus()
}

function filtrarLista() {
    const filterList = arrayNames.filter((name) => name.includes(inputFilter.value))

    result.innerHTML = filterList.join(' ')
    inputFilter.focus()
}
