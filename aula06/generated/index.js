import { calcYearOfBirth } from '../utils/birth.js'

// ECMAscript 2015

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
            yearOfBirth: calcYearOfBirth(person.age),
        });
    }
    console.log('birth', arrayNomeIdade);
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
    console.log('person1', arrayOld[0]);

    const mapAges = mockJson.map(item => item.age)
    const biggerAge = Math.max(...mapAges)

    const person = mockJson.find(item => item.age === biggerAge)

    console.log('person2', person)
}

oldest();

function greenEyes() {
    //let isGreen = false;
    // mockJson.forEach((index) => {
    //   if (index.eyeColor == "green") {
    //     isGreen = true;
    //   }
    // });

    const isGreen = mockJson.some((person) => person.eyeColor == "green")

    console.log(isGreen);
}

greenEyes();

function genders() {
    const males = mockJson
        .filter(item => item.gender == 'male')
        .map(item => item.name)

    const females = mockJson
        .filter(item => item.gender == 'female')
        .map(item => item.name)

    console.log(males)
    console.log(females)
}

genders()

function favoriteFruit() {
    const fruits = mockJson.map(item => item.favoriteFruit)

    const objFruits = {}

    for (const fruite of fruits) {
        const countFruites = objFruits[fruite] || 0
        objFruits[fruite] = countFruites + 1
    }

    const favoriteFruiteValues = Object.values(objFruits)
    const favoriteFruiteCount = Math.max(...favoriteFruiteValues)

    let favoriteFruitName = ''
    const favoriteFruiteKeys = Object.keys(objFruits)

    for (const key of favoriteFruiteKeys) {
        if (objFruits[key] === favoriteFruiteCount) {
            favoriteFruitName = key
        }
    }


    console.log(`A fruta ${favoriteFruitName} é a preferida entre ${favoriteFruiteCount} pessoas`)
}

favoriteFruit()

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
