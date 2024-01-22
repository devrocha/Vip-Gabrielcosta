function imc(){

    const height = document.getElementById('altura')
    const weight = document.getElementById('peso')

    const paragraph = document.getElementById('paragraph')

    const imc = (weight.value/(height.value**2)).toFixed(2)

    if(imc <= 18.5)
        paragraph.innerText = `${imc} Abaixo do peso`
    
    if(imc >= 18.6 && imc <= 24.9)
        paragraph.innerText = `${imc} Peso ideal`
    
    if(imc >= 25 && imc <= 29.9)
        paragraph.innerText = `${imc} Levemente acima do peso`

    if(imc >= 30 && imc <= 34.9)
        paragraph.innerText = `${imc} Obesidade Grau I`

    if(imc >= 35 && imc <= 39.9)
        paragraph.innerText = `${imc} Obesidade Grau II`

    if(imc >= 40)
        paragraph.innerText = `${imc} Obesidade Grau III`

}

