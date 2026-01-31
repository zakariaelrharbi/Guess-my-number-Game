'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    displayMessage('⛔ no number !')
  } else if (guess == secretNumber) {
    displayMessage('🎉 Correct Number!')
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 0) {
        displayMessage(guess > secretNumber ? 'too High! ' : 'too Low! ')
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
        displayMessage('You Lost the Game')
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...')
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
