let quizVal = {
	ord: 0, //Ordem das questões e opções do quiz
	acertos: 0,
	erros: 0,
	titles: [ //Títulos do quiz
	'Pikachu pode aprender o HM03(surf)?', 
	'Dragonite tem fraquesa com pokémons do tipo...',
	'Raichu era pra ter uma evolução?',
	'Como se evolui o Pichu?',
	'Dratini é a antevolução de...',
	'Ash no anime havia trocado seu Butterfree por um...',
	'As falas de Red para Gold em Pokémon Gold eram...',
	'O nome de Red era para ser...',
	'A terceira geração veio antes ou depois do remake da primeira?',
	'Por que Satoshi teve essa idéia que se tornou essa franquia?'
	],
	
	options:
	[ //Valores das opções
		['Sim', 'Não', 'Tecnicamente, sim', 'Tecnicamente, não'],
		['Fada', 'Pedra', 'Fogo'],
		['Sim', 'Não'],
		['Via level', 'Via felicidade', 'Via thunderstone'],
		['Butterfree', 'Bubasaur', 'Totodile', 'Dragonair'],
		['Caterpie', 'Pichu', 'Raticate', 'Squirtle'],
		['Nada', '"E então, você enfim chegou[...]"', '"Que fazes aqui?"', '"Olá, Red[...]"'],
		['Yuri', 'Ren', 'Minato', 'Satoshi'],
		['Antes', 'Depois'],
		['Porque ele era fã de RPGs', 'Porque ele amava monstros quando criança', 'Para reacender brincadeiras de sua infância']
		
	],
	img: [ //Atalho das imagens
	'https://image.winudf.com/v2/image/YXBwaW52ZW50b3IuYWlfcmVwYXJ0b2g5OS5mbGFwcHliaXJkX3NjcmVlbl8wXzE1MzQ3MDM0MjlfMDc1/screen-0.jpg?fakeurl=1&type=.webp', 
	'https://www.nintenderos.com/wp-content/uploads/2020/11/dragonite-pokemon.jpg', 
	'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/07/pikachu-raichu-badminton.jpg', 
	'https://xboxplay.games/uploadStream/4962.jpg',
	'http://pa1.narvii.com/6219/330fc95205f2262dd88dbffb2871ec5bb79afc86_00.gif',
	'https://fictionhorizon.com/wp-content/uploads/2021/10/das-digda-problem.jpg',
	'https://i.pinimg.com/originals/98/59/c6/9859c6dd67c47991fcaf7aa8832b1942.jpg',
	'https://i.pinimg.com/originals/7d/eb/4e/7deb4ede8b6dceb18b1e3fe1b2096ec2.png',
	'https://cdn.donmai.us/original/f7/f1/__may_and_brendan_pokemon_and_3_more_drawn_by_ittumozzz__f7f1043f546956032a10c585a26d4937.jpg',
	'https://static.wikia.nocookie.net/pokedex-br/images/2/2b/331px-Chousen_clefairy_by_raizy-d6b7n47-1--1-.png/revision/latest?cb=20151224115245&path-prefix=pt-br'
	],
	
	imgName: [ //Nome das imagens
	'Pikachu_Surfs', 
	'Dragonite', 
	'Raichu', 
	'Pichu', 
	'Dratini',
	'Butterfree',
	'a',
	'a',
	'a',
	'a'
	],
	certos: [3, 1, 1, 2, 4, 3, 1, 4, 1, 3] //Numeração das respostas certas
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
		<span class="restart" class="restart" onclick="fil(2)">Refazer</span>
	`;
	main.appendChild(result);
	
	if(quizVal.erros <= 0){
		document.getElementById('erros').remove();
		document.getElementById('acertos').remove();
		result.innerHTML = `
			<h1 id="res">Parabéns!</h1>
			<p>Você não errou nenhuma pergunta.</p>
			<span class="restart" class="restart" onclick="fil(2)">Refazer</span>
		`;
		document.getElementById('res').style.marginBottom = '0px';
	}else if(quizVal.acertos <= 0){
		document.getElementById('erros').remove();
		document.getElementById('acertos').remove(); 
		result.innerHTML = `
			<h1 id="res">Poxa!</h1>
			<p>Você errou todas as perguntas. :(</p>
			<span class="restart" class="restart" onclick="fil(2)">Refazer</span>
		`;
		document.getElementById('res').style.marginBottom = '0px';
	}else{
		document.getElementById('acertos').style.width = `${quizVal.acertos / quizVal.titles.length * 50}%`;
		document.getElementById('erros').style.width = `${quizVal.erros / quizVal.titles.length * 50}%`;
	}
}