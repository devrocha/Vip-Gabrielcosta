/*
    Cases: Formas de escrever nome de variaveis, funções, arquivos, constants.. basicamente tudo na prog.

    camelCase: começa minusculo e a primera letra da outra palavra é maiscula
    PascalCase: começa maiscula e a primera letra da outra palavra é maiscula
    quebab-case: duas palavras separadas por hifen -
    snake_case: duas palavras separadas por underscore ou underline _
    LOWER_SNAKE_CASE: usada para numeros fixos (numeros magicos)
*/


const inputName = document.getElementById('name')
const cpf = document.getElementById('cpf')
const addButton = document.getElementById('addButton')
const table = document.getElementById('table')

const arrayStudent = []

function addStudent() {
    const student = {
        name: inputName.value,
        cpf: cpf.value
    }

    arrayStudent.push(student)

    inputName.value = ''
    cpf.value = ''

    tableScreen()
}

function tableScreen() {
    table.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Ações</th>
        </tr>
    `

    for (let i = 0; i < arrayStudent.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${arrayStudent[i].name}</td>
                <td>${arrayStudent[i].cpf}</td>
                <td>
                    <button onclick=deleteStudent()>
                        <img src="./assets/trash.png">
                    </button>
                </td>
                <td>
                    <button onclick=editStudent()>
                        <img src="./assets/pencil.png" id='edit'>
                    </button>
                </td>
            </tr>
        `
    }
}

function deleteStudent(){
    // dica: A função deve receber qual é a posição do array que o aluno a ser deletado está.
    // dica2: Pesquisar sobre o métode de array chamado "splice"
}

function editStudent(){
    console.log('clicou na edicao')
    // dica: A função deve receber qual é a posição do array que o aluno a ser deletado está.
    // dica 2: Pesquisar sobre o métode de array chamado "splice"
    // dica 3: você vai precisar de uma variável de controle
}

addButton.addEventListener('click', () => {
    addStudent()
})