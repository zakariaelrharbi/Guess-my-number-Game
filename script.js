'use strict'


// document.querySelector('.message').textContent = '🎉 Correct Number!'

// document.querySelector('.number').textContent = '13'
// document.querySelector('.score').textContent = '10'
// document.querySelector('.guess').value= 30
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random()*20) + 1
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener
('click', function(){
    const guess = document.querySelector('.guess').value
    

    if(!guess){
        document.querySelector('.message').textContent = '⛔ no number !'
    }
    else if (guess == secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!'
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347'
        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    }
    else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'too High! '
            score = score -1
            document.querySelector('.score').textContent = score    
        } else {
             document.querySelector('.message').textContent = 'You Lost the Game'
        }
    }
    else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'too Low! '
            score = score -1
            document.querySelector('.score').textContent = score    
        } else {
            document.querySelector('.message').textContent = 'You Lost the Game'
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = '20'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value = ' '
    document.querySelector('.number').textContent = '?'
    document.querySelector('.highscore').textContent = '0'

})