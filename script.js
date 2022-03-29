//DOM: every element is an object liked to fom a tree
//Document is the parent of HTML element an serves as an entry point in the DOM

'use strict';

//  document.querySelector('.message').textContent = '🎉 Correct Number';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {

    document.querySelector('.message').textContent = '❌ No Number!';

    //when player wins
  } else if (guess === secretNumber) {

    document.querySelector('.message').textContent = '🎉 Correct Number';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //when guess is too high
  } else if (guess > secretNumber) {

    if (score > 1) {

      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;

      //when player's score is zero
    } else {

      document.querySelector('.message').textContent = '💥 You Lost The Game!';
      document.querySelector('.score').textContent = 0;

    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {

      document.querySelector('.message').textContent = '📈 Too Low';
      score--;
      document.querySelector('.score').textContent = score;

    } else {

      document.querySelector('.message').textContent = '💥 You Lost The Game!';
      document.querySelector('.score').textContent = 0;

    }
  }
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20; 

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

});