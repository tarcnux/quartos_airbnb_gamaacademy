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
			let container = document.querySelector(".container");

			// Nova figure representando um nonvo quarto
			let figure = document.createElement("figure");
			// Definir classe da div
      figure.className = "quarto";
      
      // Imagem
      let img = document.createElement("img");
      img.setAttribute("src", quarto.photo);
      img.setAttribute("alt", quarto.name)

			// Caption da Figure com o nome do quarto
			let figcaption = document.createElement("figcaption");
			// Inserir texto no elemento figcaption
			figcaption.innerHTML = quarto.name;

      // Inserir a foto na figure
      figure.appendChild(img);
      // Inserir Caption na figure
			figure.appendChild(figcaption);
			// Inserir figure no elemento container
			container.appendChild(figure);
		});
	});