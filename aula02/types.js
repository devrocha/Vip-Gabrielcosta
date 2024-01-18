/*
    Tipos:
        1- Primitivos (string, number, boolean (true or false), null, undefined)
        2- Referência (array e object literals)
*/

// ---------------- Tipos Primitivos ------------

// string
console.log("Matheus", typeof 'Matheus')

// template string
console.log(`Matheus`, typeof `Matheus`)

// Numbers
console.log(1, 2.3, -5, typeof 2.3)

// boolean
console.log(true, typeof true)

// null
console.log(null, typeof null)

// undefined
console.log(undefined, typeof undefined)

// ---------------- Tipos por referência ------------

// array
console.log(["Matheus", 3, null, true, undefined, [1, 2, 3]], typeof [])

// object literals
console.log(
    {
        name: "Matheus",
        hasCats: ['Arya', "Sansa", "Mando"],
        age: 29,
        likeJavascript: true,
        wife: {
            name: "Aline",
            age: 33
        } 
    }, typeof {}
)