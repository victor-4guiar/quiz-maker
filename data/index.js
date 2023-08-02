let quiz = {
	quizpos: 0,
	acertos: 0,
	erros: 0,
	lock: false,
	titulos: ['Qual a cor do Sonic?', 'Tem jogos do Sonic para Master System?', 'Em que jogo Tails aparece pela primeira vez?'],
	fundos: ['data/img/1.jpg', 'data/img/2.jpg', 'data/img/3.jpg'],
	opcoes: [['Marrom', 'Azul', 'Verde'], ['Sim', 'Não'], ['Sonic The Hedgehog 3', 'Sonic & Knuckles', 'Sonic The Hedgehog 2']],
	certas: [2, 1, 3]
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
		setTimeout(()=>{
			if(quiz.quizpos < quiz.titulos.length){
				document.querySelector('.quiz').classList.add('desaparecer');
				setTimeout(()=>{
					document.querySelector('.quiz').remove();
					quiz.lock = false;
					load();
				}, 480);
			}else{
				console.log('end.');
				console.log(`acertos: ${quiz.acertos}`);
				console.log(`erros: ${quiz.erros}`);
			}
		}, 1000);
	}
}