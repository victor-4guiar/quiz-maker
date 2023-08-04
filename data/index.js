let quiz = {
	quizpos: 0,
	acertos: 0,
	erros: 0,
	lock: false,
	titulos: [
	'Qual a cor do Sonic?', 
	'Tem jogos do Sonic para Master System?', 
	'Em que jogo Tails aparece pela primeira vez?', 
	'Amy gosta do Sonic?',
	'Knuckles sempre esteve de boa com o Sonic?',
	'Qual o nome dos bixinhos presentes nos 2 jogos de Sonic Adventure?',
	'Sonic tem outras transformações além do Super Sonic?',
	'Qual personagem teve um jogo exclusivo dentre esses?'
	],
	fundos: ['data/img/1.jpg', 'data/img/2.jpg', 'data/img/3.jpg', 'data/img/4.jpg', 'data/img/5.jpg', 'data/img/6.jpg', 'data/img/7.jpg', 'data/img/8.jpg'],
	opcoes: [['Marrom', 'Azul', 'Verde'], ['Sim', 'Não'], ['Sonic The Hedgehog 3', 'Sonic & Knuckles', 'Sonic The Hedgehog 2'], ['Sim', 'Não'], ['Sim', 'Não'], ['Mini Chaos', 'Chaos', 'Water Pets'], ['Sim', 'Não'], ['Big the Cat', 'Cream the Rabbit', 'Miles Tails Prower']],
	certas: [2, 1, 3, 1, 2, 2, 1, 3]
}

const quizCom = (fundo, titulo) => `
	<section class="quiz">
		<section class="quiz-header" style="background-image: url('${fundo}');">
			<div class="mask">
				<h1>${titulo}</h1>
			<div>
		</section>
		<section class="quiz-body">
		</section>
	</section>
`

const opcao = (texto, num) => `
	<button class="option" onclick="next(${num})">${texto}</button>
`

const finalSec = (acertos, erros, msg) => `
	<section class="final aparecer">
		<h1>Acertos: <span class="fonte-verde">${acertos}</span> | Erros: <span class="fonte-vermelha">${erros}</span></h1>
		<p>${msg}</p>
		<button class="refazer" onclick="rebobinar()">Refazer Quiz</button>
	</section>
`

function load(){
	let op = quiz.opcoes[quiz.quizpos];
	document.querySelector('main').innerHTML += quizCom(quiz.fundos[quiz.quizpos], quiz.titulos[quiz.quizpos]);
	for(c=0;c < op.length;c++){
		document.querySelector('.quiz-body').innerHTML += opcao(op[c], c);
	}
}

function next(num){
	if(!quiz.lock){
		if(quiz.certas[quiz.quizpos] == num+1){
			quiz.acertos++;
		}else{
			quiz.erros++;
		}
		quiz.lock = true;
		quiz.quizpos++;
		document.querySelectorAll('.option')[num].classList.add('clicado');
		document.querySelectorAll('.option')[num].classList.remove('option');
		setTimeout(()=>{
			document.querySelector('.quiz').classList.add('desaparecer');
			setTimeout(()=>{
				document.querySelector('.quiz').remove();
				quiz.lock = false;
				if(quiz.quizpos < quiz.titulos.length){
					load();
				}else{
					final();
				}
				}, 480);
		}, 1000);
	}
}

function final(){
	document.querySelector('main').innerHTML += finalSec(quiz.acertos, quiz.erros, calc());
}

function calc(){
	if(quiz.acertos > quiz.erros){
		return 'Meus parabéns!'
	}else{
		return 'Poxa... Quem sabe na próxima você vá bem!'
	}
}

function rebobinar(){
	quiz.quizpos = 0;
	quiz.acertos = 0;
	quiz.erros = 0;
	document.querySelector('.final').classList.add('desaparecer');
	setTimeout(()=>{
		document.querySelector('.final').remove();
		load();
	}, 480);
}