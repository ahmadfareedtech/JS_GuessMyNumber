//DOM: every element is an object liked to fom a tree
//Document is the parent of HTML element an serves as an entry point in the DOM

'use strict';

//  document.querySelector('.message').textContent = '🎉 Correct Number';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
 
    document.querySelector('.message').textContent = '❌ No Number!';

} else if (guess === secretNumber) {
    
    document.querySelector('.message').textContent = '🎉 Correct Number';
  
} else if (guess > secretNumber) {
    
    if (score > 1) {
    
        document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    
    } else {
    
        document.querySelector('.message').textContent = '💥 You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    
    }
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
