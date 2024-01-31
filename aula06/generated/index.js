async function fetchJson() {
    const response = await fetch('./generated.json')
    const data = await response.json() // promise
    return data
}

const mockJson = await fetchJson()
console.log("Geral", mockJson)

function filterActive(){
    //... seu script
    const arrayFiltradoAtivos = mockJson.filter(item => item.isActive)
    console.log(arrayFiltradoAtivos)
}

filterActive()

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