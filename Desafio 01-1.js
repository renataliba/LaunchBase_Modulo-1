/*Desafio 01-1. Primeiros passos com JS*/

/*CÁLCULO IMC*/

const nome = 'Renata' 
//No JS usar o ; é facultativo
//console.log(nome) - comando para impressão
//as strings podem ser declaradas com aspas duplas ou simples e com a 
//`` é uma template string que aceita variáveis dentro dela
//const nome3 = `Valeska e ${nome}`

//if (condicao1) {
//    if (condicao2) {
      // Condição 1 e 2 passaram
//    } else { 
      // Condição 1 passou, porém condição 2 não passou
//    }
//  } else {
    // Condição 1 não passou
//  }

//Desafio cálculo IMC
const peso = 58
const altura = 1.64

const IMC = peso/(altura*altura)

if (IMC >=30) {
  console.log(`${nome}, Vc está acima do peso, se cuida!`)  
} else {
  console.log(`${nome}, Arrasou! Continue assim, Lindeza!`)
}

//Desafio Aposentadoria
const sexo = "F"
const idade = 45
const contrib = 40

if (sexo == "F" && idade + contrib >= 85 
|| sexo == "M" && idade + contrib >= 95 ) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
console.log(`${nome}, você não pode se aposentar!`)
}
