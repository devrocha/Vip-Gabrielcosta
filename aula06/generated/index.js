async function fetchJson() {
  const response = await fetch("./generated.json");
  const data = await response.json(); // promise
  return data;
}

const mockJson = await fetchJson();
console.log("Geral", mockJson);

function filterActive() {
  //... seu script
  const arrayFiltradoAtivos = mockJson.filter((item) => item.isActive);
  console.log(arrayFiltradoAtivos);
}

filterActive();

function alphabeticOrder() {
  const arrayAlfabetico = mockJson.toSorted((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  const arrayAlfabeticoFiltrado = arrayAlfabetico.filter(
    (item) => item.isActive
  );

  console.log(arrayAlfabeticoFiltrado);
}
alphabeticOrder();

function calculateAge() {
  const year = new Date().getFullYear();

  const arrayNomeIdade = [];

  // for(let i = 0; i < mockJson.length ; i++){
  //     arrayNomeIdade.push({
  //         name: mockJson[i].name,
  //         yearOfBirth:year - mockJson[i].age
  //     })
  // }

  for (const person of mockJson) {
    arrayNomeIdade.push({
      name: person.name,
      yearOfBirth: year - person.age,
    });
  }
  console.log(arrayNomeIdade);
}

calculateAge();

function assumeGender() {
  const arrayMale = mockJson
    .filter((item) => item.gender == "male")
    .map((item) => item.name);

  const arrayFemale = mockJson
    .filter((item) => item.gender == "female")
    .map((item) => item.name);

  console.log(arrayMale);
  console.log(arrayFemale);
}

assumeGender();

function oldest() {
  const arrayOld = mockJson.sort((a, b) => {
    return b.age - a.age;
  });
  console.log(arrayOld[0]);
}

oldest();

function greenEyes() {
  let isGreen = false;
  const arrayEye = mockJson.forEach((index) => {
    if (index.eyeColor == "green") {
      isGreen = true;
    }
  });

  console.log(isGreen);
}

greenEyes();

function fruits() {
  let maxNumeroRepetido = 0;
  
}

fruits();

/* 
Atividade

1 - Escreva uma função que filtra apenas os usuários ativos
2 - Escreva uma função que ordena de forma alfabética (pelo nome) os usuários ativos, sem alterar o array original
3 - Escreva uma função que calcula a partir da idade da pessoa, qual foi o ano que ela nasceu. 
    O resultado deve ser um novo array com a seguinte estrutura:
    [
        {
            name: "Matheus",
            yearOfBirth: 1994
        }
    ]
4 - Escreva uma função que separa em dois array diferentes os homens e as mulheres, nesse arrays devem ter apenas o nome de cada um deles
Exemplo: Homens: ["Matheus", "Ivo", "Lucas"]
         Mulheres: ["Liliana", "Maria", "Aline"]
5 - Escreva uma função que me retorna quem é a pessoa mais velha 
6 - Escreva uma função que retorna um booleano (true or false) me dizendo se alguem tem olho verde.
7 - Escreva uma função que "elege" qual é a fruta favorita entre as pessoas e que mostra para quantas pessoas essa é a fruta favorita
    O retorno deve ser algo como: "A fruta {nome_da_fruta} é a preferida entre {qnt_pessoas} pessoas"
*/
