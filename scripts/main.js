const guessSubmit = document.querySelector('.guessSubmit');
guessSubmit.addEventListener('click', guessNumber);

const guessField = document.querySelector('.guessField');
guessField.focus();

let randomNum = Number(Math.floor((Math.random() * 100) +1));
let turn = 1;

const prevGuesses = document.querySelector('.prevGuesses');
const result = document.querySelector('.result');
const lowOrHi = document.querySelector('.lowOrHi');
let resetGame;

function guessNumber(){

	let guessNum = Number(guessField.value);
	 if(turn == 1){
		 prevGuesses.textContent = "Previous Guess : "
	 }
	 
	prevGuesses.textContent += " "+ guessNum;
	
	if(randomNum == guessNum){
		result.textContent = "Congratulations you won !!!"
		result.style.color = 'white';
		result.style.backgroundColor = "green";
		lowOrHi.textContent = '';
		setGameOver();
	}else if(turn == 10){
		result.textContent = "Game Over !!!";
		result.style.color = 'white';
		result.style.backgroundColor = "red";
		setGameOver();
	}else if(guessNum < randomNum){
		result.textContent = "Wrong !";
		result.style.color = 'white';
		result.style.backgroundColor = "red";
		lowOrHi.textContent = "Last guess was too low";
		
	}else if(guessNum > randomNum){
		result.textContent = "Wrong !"
		result.style.color = 'white';
		result.style.backgroundColor = "red";
		lowOrHi.textContent = "Last guess was too high";
	}
	
	turn++;
	guessField.value='';
	guessField.focus();
	
}

function setGameOver(){
	guessField.value = "";
	guessField.disabled = true;
	guessSubmit.disabled = true;
	
	resetGame = document.createElement('Button');
	resetGame.textContent = "Start a new game";
	resetGame.addEventListener('click', setResetGame);
	
	document.querySelector('.form').appendChild(resetGame);
}

function setResetGame(){
	
	const resultParas = document.querySelectorAll('.resultParas p');
	for(let i=0; i< resultParas.length;i++){
		resultParas[i].textContent = '';
	}
	guessField.disabled = false;
	guessSubmit.disabled = false;
	resetGame.parentNode.removeChild(resetGame);
	
	guessField.focus();
	randomNum = Number(Math.floor((Math.random() * 100) +1));
	turn = 1;
}
