// Desafio 01-3. Funções e estruturas de repetição

// const usuarios = [
//     {nome: "Alexandre", tecnologia: ["HTML","CSS"]},  
//     {nome: "Leo", tecnologia: ["Python","C#"]}, 
//     {nome: "Gabriel", tecnologia: ["JavaScript","CSS","HTML"]}
// ]

// function checaSeUsuarioUsaCSS(usuario) {
//     for(let i = 0; i < usuario.length; i++) {
//         for(let j = 0; j < usuario[i].tecnologia.length; j++) {
//             if(usuario[i].tecnologia[j] === "CSS") {
//                 console.log(`O usuário ${usuario[i].nome} trabalha com CSS`)
//             }
//         }
//     }
// }

// checaSeUsuarioUsaCSS(usuarios)

// Soma de despesas e receitas

const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

  function calculaSaldo(usuarios) {
      let somaReceita = 0
      for (let i = 0; i < usuarios.receitas.length; i++) {
          somaReceita = somaReceita + usuarios.receitas[i]
      }
      let somaDespesa = 0
      for (let i = 0; i < usuarios.despesas.length; i++) {
          somaDespesa = somaDespesa + usuarios.despesas[i]
      }
      return somaReceita - somaDespesa
  }

  function imprimeSaldo() {
      for (let i =0; i < usuarios.length; i++) {
          let saldo = calculaSaldo(usuarios[i])
          if (saldo < 0) {
              console.log(`${usuarios[i].nome} possui saldo NEGATIVO de: ${saldo}`)
          } else {
              console.log(`${usuarios[i].nome} possui saldo POSITIVO de: ${saldo}`)
          }
      }
  }

  imprimeSaldo()