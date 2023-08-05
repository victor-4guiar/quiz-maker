let ci = true;//Vaiável que define se o click da introdução pode funcionar ou não.
//Componente/carcaça do quiz.
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
//Componente da opcão que é separado.
const opcao = (texto, num) => `
	<button class="option" onclick="next(${num})">${texto}</button>
`
//Componente da sessão final quando o usuário encerra o quiz.
const finalSec = (acertos, erros, msg) => `
	<section class="final aparecer">
		<h1>Acertos: <span class="fonte-verde">${acertos}</span> | Erros: <span class="fonte-vermelha">${erros}</span></h1>
		<p>${msg}</p>
		<button class="refazer" onclick="rebobinar()">Refazer Quiz</button>
	</section>
`
//Funcão que carrega tal questão do quiz, o que faz o quiz funcionar.
function load(){
	let op = quiz.opcoes[quiz.quizpos];
	document.querySelector('main').innerHTML += quizCom(quiz.fundos[quiz.quizpos], quiz.titulos[quiz.quizpos]);
	for(c=0;c < op.length;c++){
		document.querySelector('.quiz-body').innerHTML += opcao(op[c], c);
	}
}
//Função que auxilia o próximo passo do quiz.
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
//Função que dá valores finais depois do quiz ter sido derminado.
function final(){
	document.querySelector('main').innerHTML += finalSec(quiz.acertos, quiz.erros, calc());
}
//Função que calcula o tipo de resposta, se foi bem ou mal no quiz.
function calc(){
	if(quiz.acertos > quiz.erros){
		return 'Meus parabéns!'
	}else{
		return 'Poxa... Quem sabe na próxima você vá bem!'
	}
}
//Função que reseta as configurações do quiz nas que vem padrão.
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