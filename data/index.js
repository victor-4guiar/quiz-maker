let quizVal = {
	ord: 0, //Ordem das questões e opções do quiz
	acertos: 0,
	erros: 0,
	titles: [ //Títulos do quiz
	'Qual o Pokémon favorito de Victor?', 
	'Qual a edição de Pokémon favorita de Victor?',
	'Qual a cor favorita de Victor?'],
	options:
	[ //Valores das opções
	['Raichu', 'Dragonite', 'Pikachu'],
	['Pokémon Fire Red', 'Pokémon Gold', 'Pokémon Ruby'],
	['Azul', 'Verde', 'Vermelho', 'Roxo']
	],
	img: ['data/img/img_0.png', '', 'data/img/img_0.png'], //Atalho das imagens
	imgName: ['Sayori', 'Sayori', 'Sayori'], //Nome das imagens
	certos: [3, 3, 4] //Numeração das respostas certas
}

function make(){
	let main = document.getElementById('main');
	let quiz = document.createElement('div');
	quiz.setAttribute('id', 'quiz');
	quiz.classList.add('quiz');
	quiz.innerHTML = `
		<h1>${quizVal.titles[quizVal.ord]}</h1>
		<img id="${quizVal.imgName[quizVal.ord]}" class="quiImg" src="${quizVal.img[quizVal.ord]}" alt="${quizVal.imgName[quizVal.ord]}">
		<ul id="op-con" class="potion-container">
		</ul>
	`;
	main.appendChild(quiz);
	
	if(quizVal.img[quizVal.ord] == false){ // Se não há nome da imagem, ela será deletada
		document.getElementById(`${quizVal.imgName[quizVal.ord]}`).remove();
	}
	
	let ordop = quizVal.options[quizVal.ord]; // Sistema que busca os valores nos vetores para posicionar as opções
	for(c=0;c<ordop.length;c++){
		document.getElementById('op-con').innerHTML += `
			<li><span id="${c}" class="option" onclick="addic(${c})">${ordop[c]}</span></li>
		`;
	}
}

function results(){
	let main = document.getElementById('main');
	let result = document.createElement('result');
	result.setAttribute('id', 'result');
	result.classList.add('result');
	result.innerHTML += `
		<h1>Resultados</h1>
		<p>Acertos: ${quizVal.acertos}</p>
		<p>Erros: ${quizVal.erros}</p>
	`;
	main.appendChild(result);
}

function addic(clicado){
	if (clicado == quizVal.certos[quizVal.ord] - 1){
		quizVal.acertos++;
	}else{
		quizVal.erros++;
	}
	
	quizVal.ord++;
	document.getElementById('quiz').remove();
	
	if(quizVal.titles[quizVal.ord]  <= quizVal.titles){
		make();
	}else{
		results();
	}
}