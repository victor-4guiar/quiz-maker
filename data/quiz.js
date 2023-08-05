//Quiz em sí, para construir o seu, lembre-se de respeitar as regras da sintaxe do JavaScript para funcionar sem problemas.
let quiz = {
	quizpos: 0,
	acertos: 0,
	erros: 0,
	lock: false,
	titulos: [
	'Sonic é um...', 
	'Tem jogos do Sonic para Master System?', 
	'Em que jogo Tails aparece pela primeira vez?', 
	'Amy gosta do Sonic?',
	'Knuckles sempre esteve de boa com o Sonic?',
	'Qual o nome dos bixinhos presentes nos 2 jogos de Sonic Adventure?',
	'Sonic tem outras transformações além do Super Sonic?',
	'Qual personagem teve um jogo exclusivo dentre esses?'
	],
	fundos: ['data/img/1.jpg', 'data/img/2.jpg', 'data/img/3.jpg', 'data/img/4.jpg', 'data/img/5.jpg', 'data/img/6.jpg', 'data/img/7.jpg', 'data/img/8.jpg'],
	opcoes: [['Gato', 'Ouriço', 'Cachorro'], ['Sim', 'Não'], ['Sonic The Hedgehog 3', 'Sonic & Knuckles', 'Sonic The Hedgehog 2'], ['Sim', 'Não'], ['Sim', 'Não'], ['Mini Chaos', 'Chaos', 'Water Pets'], ['Sim', 'Não'], ['Big the Cat', 'Cream the Rabbit', 'Miles Tails Prower']],
	certas: [2, 1, 3, 1, 2, 2, 1, 3]
}