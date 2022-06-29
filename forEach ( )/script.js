//                                  		 	-> -> ->      forEach exemplo simples     <- <- <-


/* 

let listadeaprovados = [
	"jorge@gmail.com",
	"maria@gmail.com",
	"pedro@gmail.com",
	"joyce@gmail.com",
	"leonardo@gmail.com"
];

listadeaprovados.forEach((elementoAtual, indexAtual, array) => {
	console.log(`Email para ${elementoAtual} foi enviado com sucesso`)
	console.log(`Sua posição no ranking é ${indexAtual + 1}°`)
	console.log(` temos ${array.length} pessoas na disputa`)
	console.log()
	console.log("===============================================")
	console.log()
	
	
	// elementoAtual = o item que ele percorre no caso acima email por email
	
	// indexAtual = a posição do index do elementoAtual no array 
	
	// array = o array commpleto 
}) 

*/














//                                  		 -> -> ->      forEach percorrendo um objeto      <- <- <-



/*


let pessoa = [{
		nome: "Talles",
		Idade: 19,
		EstadoCivil: "Solteiro",
		Profissão: "Desenvolvedor",
		filhos: false
	},
	{
		nome: "Joyce",
		Idade: 19,
		EstadoCivil: "Solteiro",
		Profissão: "Desenvolvedor",
		filhos: false
	},
	{
		nome: "Mario",
		Idade: 39,
		EstadoCivil: "Casado",
		Profissão: "Medico",
		filhos: true
	},
	{
		nome: "Steve",
		Idade: 29,
		EstadoCivil: "Casado",
		Profissão: "Policial",
		filhos: true
	}
]

pessoa.forEach((elemento, index) => {
	if (elemento.filhos === true) {
		console.log(`${elemento.nome}, tem filho e esta localizado no array de numero ${index}`)
	}
}) 

*/



let produtos = [{
		nome: "Notebook",
		preço: 2500,
		porcentagemDeDesconto: 0.35
	},
	{
		nome: "Televisão",
		preço: 3200,
		porcentagemDeDesconto: 0.45
	},
	{
		nome: "Ps5",
		preço: 5000,
		porcentagemDeDesconto: 0.20
	},
	{
		nome: "Celular",
		preço: 1500,
		porcentagemDeDesconto: 0.30
	}
]

produtos.forEach((elemento) => {

	if (elemento.porcentagemDeDesconto > 0) {
		let desconto = elemento.preço * elemento.porcentagemDeDesconto
		console.log(`O	valor do ${elemento.nome} é ${elemento.preço}, o valor do desconto é ${desconto}, o valor total fica ${elemento.preço - desconto} `)
		console.log(desconto)
		console.log()

	}
})