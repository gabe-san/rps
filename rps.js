//Game starts with computer, thus create function that will return random string: "Rock", "Paper", " Scissors"
//Make an function scope array with the choices, then use math.random * the length of the array to get return
const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let randomComputerChoiceNum = Math.floor(Math.random() * choices.length);
    return choices[randomComputerChoiceNum];
} 

// console.log(getComputerChoice()) : use to test if choice function worked

//Need function to play one round of RPS. Two parameters: PlayerChoice and Computer Choice. Then Return a string that declares the Winner: You Win/lose. X beats X... Note that playerChoice should be case-insensitive for now.
const computerSelection = getComputerChoice();
const playerSelection = "Rock";
function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie! Both chose the same";
    } 
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose! Paper beats rock";
    } 
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You won! Paper beats rock";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats scissors";
    } 
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats scissors";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beat paper";
    } else {
        return "You win! Scissors beat paper";
    }
}

//console.log(playerSelection)
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));

