let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');
let prevGuesses = [];
let numGuess = 1;
let playGame = true;

if(playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if(isNaN(guess)) {
    alert('Please enter a valid number');
  } else if(guess<1) {
    alert('Please enter a number greater than 1');
  } else if(guess>100) {
    alert('Please enter a number greater than 100');
  } else {
    prevGuesses.push(guess);
    if(numGuess===10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess===randomNumber) {
    displayMessage("You guessed it right.");
    endGame();
  } else if(guess>randomNumber) {
    displayMessage("Number is too high");
  } else if(guess<randomNumber) {
    displayMessage("Number is too low");
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}<\h2>`;
}

function endGame() {
  userInput.value='';
  userInput.setAttribute("disabled",'');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame">Start new game<\h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

function newGame() {
  const newGamebutton = document.querySelector('#newGame');
  newGamebutton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  })
}