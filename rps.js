//Game starts with computer, thus create function that will return random string: "Rock", "Paper", " Scissors"
//Make an function scope array with the choices, then use math.random * the length of the array to get return
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomComputerChoiceNum = Math.floor(Math.random() * choices.length);
    return choices[randomComputerChoiceNum];
} 

function game() {
    for (let i =0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors? 5 rounds against the computer!");
        let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        const computerSelection = getComputerChoice();
        alert(playRound(playerChoice, computerSelection));

        if (i == 4) {
            alert(gameState());
        }
    }
}


function playRound (playerChoice, computerSelection) {
    if (playerChoice === computerSelection) {
        return "Tie! Both chose the same";
    } 
    else if (playerChoice == "Rock" && computerSelection == "Paper") {
        computerScore+= 1;
        return "You lose! Paper beats rock";
    } 
    else if (playerChoice == "Paper" && computerSelection == "Rock") {
        playerScore+= 1;
        return "You won! Paper beats rock";
    }
    else if (playerChoice == "Rock" && computerSelection == "Scissors") {
        playerScore+= 1;
        return "You win! Rock beats scissors";
    } 
    else if (playerChoice == "Scissors" && computerSelection == "Rock") {
        computerScore+= 1;
        return "You lose! Rock beats scissors";
    }
    else if (playerChoice == "Paper" && computerSelection == "Scissors") {
        computerScore+= 1;
        return "You lose! Scissors beat paper";
    } else {
        playerScore+= 1;
        return "You win! Scissors beat paper";
    }
}

function gameState() {
        if (playerScore === computerScore) {
            return "Tie! Play again?";
        } else if (playerScore > computerScore) {
            return "You win! Play again?"
        } else {
            return "You lost! Play again?";
        }
    }

game();
//console.log(playerScore);
//console.log(computerScore);
//console.log(gameState());



