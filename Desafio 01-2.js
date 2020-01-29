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


