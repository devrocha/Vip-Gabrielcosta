// O que é função - é uma série de instruções que pode ou não retornar um resultado

// Syntax
// Função que não recebe argumentos (parâmetros)
function sum() {
    const number1 = 5
    const number2 = 10

    const sumNumbers = number1 + number2
    console.log(sumNumbers)
}

sum()

// Função que recebe argumentos (parâmetros)
function sumWithParameters(x, y) {
    console.log(x + y)
}

sumWithParameters("Matheus ", "Rocha")

// No javascript o sinal de soma (+) não só soma numeros ele também concatena strings