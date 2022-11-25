function dor(){
	let main = document.getElementById('main');
	let quiz = document.createElement('div');
	let quizVal = {
		ord: 0, //Ordem das questões e opções do quiz
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
		certos: [2, 2, 4] //Numeração das respostas certas
	}
	quiz.setAttribute('id', 'quiz');
	quiz.classList.add('quiz');
	quiz.innerHTML = `
		<h1>${quizVal.titles[quizVal.ord]}</h1>
		<ul id="op-con" class="potion-container">
		</ul>
	`;
	main.appendChild(quiz);
	
	let ordop = quizVal.options[quizVal.ord];
	for(c=0;c<ordop.length;c++){
		document.getElementById('op-con').innerHTML += `
			<li><span id="${ordop[c]}" class="option">${ordop[c]}</span></li>
		`;
	}
}