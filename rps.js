//use math.random * the length of the array to get return
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomComputerChoiceNum = Math.floor(Math.random() * choices.length);
    return choices[randomComputerChoiceNum];
} 

// function game() {
//   for (let i =0; i < 5; i++) {
//        let playerSelection = prompt("Rock, Paper, or Scissors? 5 rounds against the computer!");
//        let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
//        const computerSelection = getComputerChoice();
//       alert(playRound(playerChoice, computerSelection));
//
//        if (i == 4) {
//            alert(gameState());
//        }
//    }
//}




const rock = document.getElementById('rockbtn');
const paper = document.getElementById('paperbtn');
const scissors = document.getElementById('scissorbtn');
const playerSign= document.getElementById('results');
const playerScoreBox = document.getElementById('playerTally')
const compScoreBox = document.getElementById('computerTally')


rock.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
    if (playerScore === 5 || computerScore === 5) {
        rockbtn.setAttribute("disabled", 1)
        paperbtn.setAttribute("disabled", 1)
        scissorbtn.setAttribute("disabled", 1)
        gameState();
    }
});
paper.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
    if (playerScore === 5 || computerScore === 5) {
        rockbtn.setAttribute("disabled", 1)
        paperbtn.setAttribute("disabled", 1)
        scissorbtn.setAttribute("disabled", 1)
        gameState();
    }
});
scissors.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
    if (playerScore === 5 || computerScore === 5) {
        rockbtn.setAttribute("disabled", 1)
        paperbtn.setAttribute("disabled", 1)
        scissorbtn.setAttribute("disabled", 1)
        gameState();
    }
});

function playRound (playerChoice, computerSelection) {

    if (playerChoice === computerSelection) {
        playerSign.textContent = "Tie! Both chose the same";
    } 
    else if (playerChoice == "Rock" && computerSelection == "Paper") {
        computerScore+= 1;
        playerSign.textContent = "You lose! Paper beats rock";
    } 
    else if (playerChoice == "Paper" && computerSelection == "Rock") {
        playerScore+= 1;
        playerSign.textContent = "You won! Paper beats rock";
    }
    else if (playerChoice == "Rock" && computerSelection == "Scissors") {
        playerScore+= 1;
        playerSign.textContent = "You win! Rock beats scissors";
    } 
    else if (playerChoice == "Scissors" && computerSelection == "Rock") {
        computerScore+= 1;
        playerSign.textContent = "You lose! Rock beats scissors";
    }
    else if (playerChoice == "Paper" && computerSelection == "Scissors") {
        computerScore+= 1;
        playerSign.textContent = "You lose! Scissors beat paper";
    } else {
        playerScore+= 1;
        playerSign.textContent = "You win! Scissors beat paper";
    }
    compScoreBox.textContent = computerScore;
    playerScoreBox.textContent = playerScore;
}

function gameState() {
        if (playerScore > computerScore) {
            playerSign.innerHTML = '<button onclick="restartGame()">You win! Play again?"</button>';
        } else {
            playerSign.innerHTML = '<button onclick="restartGame()">You lost! Play again?"</button>';
        }
    }

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    compScoreBox.textContent = computerScore;
    playerScoreBox.textContent = playerScore;
    playerSign.innerHTML = "Can you defeat me?"
    rockbtn.removeAttribute("disabled")
    paperbtn.removeAttribute("disabled")
    scissorbtn.removeAttribute("disabled")

}



