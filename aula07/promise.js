// const myPromise = new Promise((resolve, reject) => {
//     if(true){
//        return resolve(console.log('ola Mundo'))  
//     }

//     reject(console.log('Deu Falha'))
// })

// function consultCep() {
//     fetch('https://viacep.com.br/ws/0100100/json/')
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error))
// }

async function consultCep() {
    try {
        const consultReponseJson = await fetch('https://viacep.com.br/ws/89255000/json/')
        const consultReponse = await consultReponseJson.json()
        console.log(await consultReponse)
    } catch (error) {
        console.log(error)
    }
}

consultCep()