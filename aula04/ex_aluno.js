const result = document.getElementById("result")
const button = document.getElementById("buttonNota")
const input = document.getElementById("nota")
const title = document.getElementById("title")

let arrayNotas = []

let media = notas => {
    soma = arrayNotas.reduce((acc, notas) => acc + notas, 0)
    mediaTotal = soma/notas.lenght
}

let mediaNotas = media(arrayNotas)

input.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        addNota()
    }
})

button.addEventListener('click', () => {
    addNota()
})

function addNota(){
    arrayNotas.push(input.value)

    console.log(arrayNotas)

    title.innerText = "Notas:"

    result.innerHTML = arrayNotas.join(' ')
    input.value = ''
    input.focus()
    
    console.log(mediaNotas)
}




