const result = document.getElementById("result")
const button = document.getElementById("buttonNota")
const input = document.getElementById("nota")
const title = document.getElementById("title")
const media = document.getElementById("media")
const menor = document.getElementById("menor")
const maior = document.getElementById("maior")

let arrayNotas = []

let somaNotas = 0

input.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        addNota()
    }
})

button.addEventListener('click', () => {
    addNota()
})

function addNota() {
    somaNotas += Number(input.value)

    arrayNotas.push(input.value)

    title.innerText = "Notas: "

    result.innerHTML = arrayNotas.join(', ')

    input.value = ''

    input.focus()

    media.innerText = `Média do aluno: ${somaNotas / arrayNotas.length}`

    menorNota()

    maiorNota()
}

function menorNota() {
    const menorNotaAluno = Math.min(...arrayNotas)

    menor.innerText = `Menor nota: ${menorNotaAluno}`
}

function maiorNota() {
    const menorNotaAluno = Math.max(...arrayNotas)

    maior.innerText = `Maior nota: ${menorNotaAluno}`
}




