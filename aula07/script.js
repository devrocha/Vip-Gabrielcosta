const cep = document.getElementById('cep')
const inputName = document.getElementById('name')

inputName.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        cadastrarCEP()
    }
})