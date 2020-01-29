/*Desafio 01-1. Primeiros passos com JS*/

/*CÁLCULO IMC*/

// const nome = 'Alexandre'
// const peso = 95
// const altura = 1.80

// const imc = peso / (altura * altura)

// if (imc >= 30) {
//     console.log(`${nome}, você esta acima do peso`)
// } else {
//     console.log(`${nome}, você não está acima do peso`)
// }

/*CÁLCULO APOSENTADORIA*/

const nome = "Alexandre"
const sexo = "M"
const idade = 21
const contribuição = 5

if ((sexo == "M" && idade + contribuição >= 95 ) || sexo == "F" && idade + contribuição >= 80 ) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}