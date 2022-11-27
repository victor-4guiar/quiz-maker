let quizVal = {
	ord: 0, //Ordem das questões e opções do quiz
	acertos: 0,
	erros: 0,
	titles: [ //Títulos do quiz
	'Qual o Pokémon favorito de Victor?', 
	'Qual a edição de Pokémon favorita de Victor?',
	'Qual a cor favorita de Victor?',
	'Qual foi o primeiro Pokemon Favorito de Victor?'],
	options:
	[ //Valores das opções
		['Raichu', 'Dragonite', 'Pikachu'],
		['Pokémon Fire Red', 'Pokémon Gold', 'Pokémon Ruby'],
		['Azul', 'Verde', 'Vermelho', 'Roxo'],
		['Butterfree', 'Pikachu', 'Raichu']
	],
	img: ['data/img/img_0.png', '', 'data/img/img_0.png', ''], //Atalho das imagens
	imgName: ['Sayori', 'Sayori', 'Sayori', 'Ohno'], //Nome das imagens
	certos: [3, 3, 4, 1] //Numeração das respostas certas
}

function results(){
	let main = document.getElementById('main');
	let result = document.createElement('result');
	result.setAttribute('id', 'result');
	result.classList.add('result');
	result.innerHTML += `
		<h1>Resultados</h1>
		<div id="cer-con" class="cer-con">
			<span id="cer-plac" class="cer-plac">Acertos</span>
			<span id="acertos" class="acertos"></span>
		</div>
		<div id="era-con" class="era-con">
			<span id="era-plac" class="era-plac">Erros</span>
			<span id="erros" class="erros"></span>
		</div>
	`;
	main.appendChild(result);
	
	if(quizVal.erros <= 0){
		document.getElementById('erros').remove();
		document.getElementById('acertos').remove();
		result.innerHTML = `
			<h1 id="res">Parabéns!</h1>
			<p>Você não errou nenhuma pergunta.</p>
		`;
		document.getElementById('res').style.marginBottom = '0px';
	}else if(quizVal.acertos <= 0){
		document.getElementById('erros').remove();
		document.getElementById('acertos').remove(); 
		result.innerHTML = `
			<h1 id="res">Poxa!</h1>
			<p>Você errou todas as perguntas. :(</p>
		`;
		document.getElementById('res').style.marginBottom = '0px';
	}else{
		document.getElementById('acertos').style.width = `${quizVal.acertos * 5}%`;
		document.getElementById('erros').style.width = `${quizVal.erros * 5}%`;
	}
}