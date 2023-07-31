function make(){
	let main = document.getElementById('main');
	let intro = document.createElement('div');
	intro.setAttribute('id', 'intro');
	intro.classList.add('intro');
	intro.innerHTML = `
	<h1>Quiz de Exemplo</h1>
	<img id="Intro" class="quiImg" src="${quizVal.introIM}" alt="Intro">
	<p>Este projeto é apenas exemplo.</p>
	<span id="start" class="start" onclick="fil(1)">Começar</span>
	`;
	main.appendChild(intro);
}

function fil(val){
	if(val == 1){
		document.getElementById('intro').remove();
		makeQuiz();
	}else {
		quizVal.ord = 0;
		quizVal.acertos = 0;
		quizVal.erros = 0;
		document.getElementById('result').remove();
		makeQuiz();
	}
}

function makeQuiz(){
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

function addic(clicado){
	if (clicado == quizVal.certos[quizVal.ord] - 1){
		quizVal.acertos++;
	}else{
		quizVal.erros++;
	}
	
	quizVal.ord++;
	document.getElementById('quiz').remove();
	
	if(quizVal.ord <= quizVal.titles.length - 1){
		makeQuiz();
	}else{
		results();
	}
}