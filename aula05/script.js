/*
    Cases: Formas de escrever nome de variaveis, funções, arquivos, constants.. basicamente tudo na prog.

    camelCase: começa minusculo e a primera letra da outra palavra é maiscula
    PascalCase: começa maiscula e a primera letra da outra palavra é maiscula
    quebab-case: duas palavras separadas por hifen -
    snake_case: duas palavras separadas por underscore ou underline _
    LOWER_SNAKE_CASE: usada para numeros fixos (numeros magicos)
*/

const inputName = document.getElementById("name");
const cpf = document.getElementById("cpf");
const addButton = document.getElementById("addButton");
const table = document.getElementById("table");

let isEdit = false;
const arrayStudent = [];
let index = null

function addStudent() {
  const student = {
    name: inputName.value,
    cpf: cpf.value,
  };

  if (isEdit) {
    arrayStudent.splice(index, 1, student)
    isEdit = false
  } else {
    arrayStudent.push(student);
  }

  inputName.value = "";
  cpf.value = "";

  tableScreen();
}

function tableScreen() {
  table.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Ações</th>
        </tr>
    `;

  for (let i = 0; i < arrayStudent.length; i++) {
    table.innerHTML += `
            <tr>
                <td>${arrayStudent[i].name}</td>
                <td>${arrayStudent[i].cpf}</td>
                <td>
                    <button onclick=deleteStudent(${i})>
                        <img src="./assets/trash.png">
                    </button>
                </td>
                <td>
                    <button onclick=editStudent(${i})>
                        <img src="./assets/pencil.png" id='edit'>
                    </button>
                </td>
            </tr>
        `;
  }
}

function deleteStudent(i) {
  arrayStudent.splice(i, 1);
  tableScreen();
}

function editStudent(i) {
  
  inputName.value = arrayStudent[i].name;
  cpf.value = arrayStudent[i].cpf;
  isEdit = true
  index = i
}

addButton.addEventListener("click", () => {
  addStudent();
});
