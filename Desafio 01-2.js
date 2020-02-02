// Desafio 01-2. Lidando com objetos e vetores

const usuario = {
    nome: "Alexandre",
    empresa: {
        nome: "Innfomaster",
        endereço: "Av. Afonso Pena",
        número: 2440,
        bairro: "Centro"
    },
    idade: 21,
    tecnologias:[ 
        {nome: "C++", especialidade: "Desktop"},
        {nome: "JavaScript", especialidade: "Web/Mobile"}
    ]
}

console.log(`O ${usuario.nome} trabalha na empresa ${usuario.empresa.nome}, localizada na ${usuario.empresa.endereço}, n ${usuario.empresa.número}.`)
console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${usuario.tecnologias[1].nome} com especialidade em ${usuario.tecnologias[1].especialidade}`)

_______

//Minha versão

        // Objetos - Abaixo a estrutura de Objetos
// const aluno01 = {
//     nome : "Renata",
//     nota : 9.8
// }
// const aluno02 = {
//     nome : "Maria",
//     nota : 10
// }
// const media = (aluno01.nota + aluno02.nota)
// console.log(media)


        // Array é o mesmo que vetores. É uma variável que contém diversos
// valores dentro dela.
// a estrutura é assim:
// const alunos = [ 
//     {
//         nome : "Renata",
//         nota : 9.8
//     },
//     {
//         nome : "Bia",
//         nota : 10
//     }
// ]
// const media = (alunos[0].nota + alunos[1].nota)/2
// console.log(media)

// const nomeDeAlunos = ["Jose","Maria","Ricardo"]
// console.log(nomeDeAlunos)
// console.log(alunos[1])


const Empresa = {
    nome: "Rocketseat",
    cor: "roxo",
    Foco: "Programação",
    Endereco: {
        Rua: "Rua Guilherme Gembala",
        numero: 260
    },
}

const usuario = [
    {nome: `Renata`, idade: 42, Tecno: 'JavaScript'},
    {nome: `Paulo`, idade: 43, Tecno: 'JavaScript'}
]

console.log(`A empresa ${Empresa.nome} está localizada na ${Empresa.Endereco.Rua}, ${Empresa.Endereco.numero}`)
console.log(`Os usuários e suas competências são:`)
console.log(`${usuario[0].nome}, ${usuario[0].idade}, ${usuario[0].Tecno} e 
${usuario[1].nome}, ${usuario[1].idade}, ${usuario[1].Tecno}`)
