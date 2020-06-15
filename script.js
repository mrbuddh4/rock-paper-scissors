let playerScore = 0
let computerScore = 0
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const result = document.getElementById('result')
const userScore = document.getElementById('userScore')
const compScore = document.getElementById('compScore')

rock.addEventListener('click', function() {
    resetResult();
    playRound('rock', computerPlay());
    endGame();
})

paper.addEventListener('click', function() {
    resetResult();
    playRound('paper', computerPlay());
    endGame();
})

scissors.addEventListener('click', function() {
    resetResult();
    playRound('scissors', computerPlay());
    endGame();
})


function resetResult() {
    result.classList.remove('win');
    result.classList.remove('lose');
    result.classList.remove('draw');
}
  
function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3);
    if (computerSelection == 0) {
        return 'rock';
    } else if (computerSelection == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        return;
    } else if (playerSelection.toLowerCase() === computerSelection) {
        draw();
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') 
        || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') 
        || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
        lose();
    } else {
        win();                    
    }
}

function lose() {
    result.classList.add('lose');
    computerScore++;
    userScore.innerHTML = playerScore;
	compScore.innerHTML = computerScore;
}

function win() {
    result.classList.add('win');
    playerScore++;
    userScore.innerHTML = playerScore;
	compScore.innerHTML = computerScore;
}

function draw() {
    result.classList.add('draw');
}

function endGame() {
    if (playerScore === 5) {
        result.classList.add('playerWin', 'result')
        result.addEventListener('click', function() {
            resetGame();
        })
    } else if (computerScore === 5) {
        result.classList.add('computerWin', 'result')
        result.addEventListener('click', function() {
            resetGame();
        })
    }
}

function resetGame() {
    window.location.reload();
}