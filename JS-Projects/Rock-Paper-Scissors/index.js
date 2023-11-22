

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const scoreDisplay = document.getElementById('score')
let userChoice
let computerChoice
let result
const score = {
    wins: 0,
    losses: 0,
    ties: 0
};
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    scoreDisplay()
}))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or possibleChoices.length
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
        calculateScore();
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You win!"
        calculateScore();
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You lost!"
        calculateScore();
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You win!"
        calculateScore();
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You lost!"
        calculateScore();
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You win!"
        calculateScore();
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You lost!"
        calculateScore();
    }
    resultDisplay.innerHTML = result
}
//Score 
function calculateScore(){
    if (result === "You win!") {
        score.wins += 1;
    } else if (result === "You lost!") {
        score.losses += 1;
    } else if (result === "It's a draw!") {
        score.ties += 1;
    }
    scoreDisplay.innerHTML = `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
}


    

