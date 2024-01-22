// Coleção de dados

const numbers = [55, 23, 201, 16, 13, 1]

const names = ["Gabriel", "Matheus", "Otavio", "Lucas", "Aline"]

console.log(names[2]) // acessando a posição de um array

const index = names.findIndex((name) => {
    return name === 'Aline'
})

console.log(index, names[index])

const sortedArrayNames = names.toSorted()
const sortedNumbers = numbers.toSorted(function (a, b) {
    return a - b
})

const sortedNumbersWithArrowFunctions = numbers.toSorted((a, b) => {
    return a - b
})

const mistos = [true, null, {}, ["Matheus", "Gabriel"]]

console.log(numbers)
console.log(sortedNumbers)
console.log(sortedNumbersWithArrowFunctions)