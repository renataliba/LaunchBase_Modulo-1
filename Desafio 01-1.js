/*Desafio 01-1. Primeiros passos com JS*/

/*CÁLCULO IMC*/

// const nome = 'Renata'
// const peso = 59
// const altura = 1.64

// const imc = peso / (altura * altura)

//if (IMC >=30) {
//  console.log(`${nome}, Vc está acima do peso, se cuida!`)  
// } else {
//  console.log(`${nome}, Arrasou! Continue assim, Lindeza!`)
// }


/*CÁLCULO APOSENTADORIA*/

const nome = "Renata"
const sexo = "F"
const idade = 21
const contribuição = 5

if ((sexo == "M" && idade + contribuição >= 95 ) || sexo == "F" && idade + contribuição >= 80 ) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}
