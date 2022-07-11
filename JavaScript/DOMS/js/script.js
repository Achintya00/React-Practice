'use strict';
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
// event listeners
document.querySelector('.check').addEventListener('click', () => {
  let num = Number(document.querySelector('.guess').value);

  if (!num) {
    displayMessage('No number!!');
  } else if (num === randomNumber) {
    displayMessage('Correct number!!');
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (num !== randomNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent =
        num > randomNumber
          ? displayMessage('Too high')
          : displayMessage('Too low');
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!!';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
});
