/*****************
Baunilha Javascript Fetch API
******************/

// Chamada da API
fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
	.then((resposta) => {
		// Salvar e retornar resposta da requisição como Json
		return resposta.json();
	})
	.then((dados) => {
		// Utilizar cada item presente da resposta
		dados.forEach((quarto) => {
			// Elemento principal
			var container = document.querySelector(".container");

			// Nova figure representando um nonvo quarto
			var figure = document.createElement("figure");
			// Definir classe da div
			figure.className = "quarto";

			// Título da Figure
			var figcaption = document.createElement("figcaption");
			// Inserir texto no elemento figcaption
			figcaption.innerHTML = quarto.name;

			// Inserir texto na figure
			figure.appendChild(figcaption);
			// Inserir figure no elemento container
			container.appendChild(figure);
		});
	});