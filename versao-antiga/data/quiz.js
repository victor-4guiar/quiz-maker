let quizVal = {
	ord: 0, //Ordem das questões e opções do quiz
	acertos: 0,
	erros: 0,
	
	introIM: 'data/img/img_i.gif', //Gif pra intro
	finalBIM: 'data/img/img_g.gif', //Gif se ganhar
	finalTIM: 'data/img/img_p.gif', //Gif se perder
	
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
		['Nada', '"E então, você enfim chegou[...]"', '"Que fazes aqui?"', '"Olá, Gold. [...]"'],
		['Yuri', 'Ren', 'Minato', 'Satoshi'],
		['Antes', 'Depois'],
		['Porque ele era fã de RPGs', 'Porque ele amava monstros quando criança', 'Para reacender brincadeiras de sua infância']
		
	],
	img: [ //Atalho das imagens
	'data/img/img_001.png', 
	'data/img/img_002.png', 
	'data/img/img_003.png', 
	'data/img/img_004.png',
	'data/img/img_005.gif',
	'data/img/img_006.png',
	'data/img/img_007.png',
	'data/img/img_008.png',
	'data/img/img_009.png',
	'data/img/img_010.png'
	],
	
	imgName: [ //Nome das imagens
	'Pikachu Surfs', 
	'Dragonite', 
	'Raichu', 
	'Pichu', 
	'Dratini',
	'Ash',
	'Red and Gold',
	'Red',
	'May and Breden',
	'Cleafairy'
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
		<p>Você errou ${quizVal.erros} e acertou ${quizVal.acertos}.</p>
		<span class="restart" class="restart" onclick="fil(2)">Refazer</span>
	`;
	main.appendChild(result);
	
	if(quizVal.erros <= 0){
		document.getElementById('erros').remove();
		document.getElementById('acertos').remove();
		result.innerHTML = `
			<h1 id="res">Parabéns!</h1>
			<p>Você não errou nenhuma pergunta.</p>
			<img class="finalImg" src="${quizVal.finalBIM}" alt="Parabéns!">
			<span class="restart" class="restart" onclick="fil(2)">Refazer</span>
		`;
		document.getElementById('res').style.marginBottom = '0px';
	}else if(quizVal.acertos <= 0){
		document.getElementById('erros').remove();
		document.getElementById('acertos').remove(); 
		result.innerHTML = `
			<h1 id="res">Poxa!</h1>
			<p>Você errou todas as perguntas. :(</p>
			<img class="finalImg" src="${quizVal.finalTIM}" alt="Poxa!">
			<span class="restart" class="restart" onclick="fil(2)">Refazer</span>
		`;
		document.getElementById('res').style.marginBottom = '0px';
	}else{
		document.getElementById('acertos').style.width = `${quizVal.acertos / quizVal.titles.length * 50}%`;
		document.getElementById('erros').style.width = `${quizVal.erros / quizVal.titles.length * 50}%`;
	}
}