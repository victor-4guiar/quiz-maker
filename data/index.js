let quiz = {
	quizpos: 0,
	acertos: 0,
	erros: 0,
	lock: false,
	titulos: ['Qual a cor do Sonic?', 'Uau', 'sim'],
	fundos: ['data/img/1.jpg', 'data/img/1.jpg', 'data/img/1.jpg'],
	opcoes: [['Marrom', 'Azul', 'Verde'], ['uc', 'uc', 'at'], ['end', 'end', 'end?...']],
	certas: [1, 1, 1]
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
}load();

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
				document.querySelector('.quiz').remove();
				quiz.lock = false;
				load();
			}else{
				console.log('end.');
				console.log(`acertos: ${quiz.acertos}`)
			}
		}, 1000);
	}
}