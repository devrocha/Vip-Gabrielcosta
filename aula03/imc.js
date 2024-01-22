// DOM - document object model: HTML

function showResults() {
    const number1 = document.getElementById('num01')
    const paragraph = document.getElementById('paragraph')

    paragraph.innerText = "Paragrafo injetado pelo Javascript"

    console.log(number1.value)
}
