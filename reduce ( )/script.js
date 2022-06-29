let lancamentos = [

	{
		País: "US",
		Lancamento: 32
	},


	{
		País: "Russia",
		Lancamento: 27
	},


	{
		País: "China",
		Lancamento: 20
	},


	{
		País: "Japão",
		Lancamento: 8
	},


	{
		País: "Brasil",
		Lancamento: 0
	},


	{
		País: "Canada",
		Lancamento: 2
	}
]

let totalLançamento = lancamentos.reduce((valorinicial, valorASomar) => valorinicial + valorASomar.Lancamento, 0)

console.log(totalLançamento)