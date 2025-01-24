let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function getHumanChoice() {
    const humanChoice = prompt("rock, paper, scissors").toLocaleLowerCase();

    if (humanChoice == "rock") {
        return 1;
    } else if (humanChoice == "paper") {
        return 2;
    } else if (humanChoice == "scissors") {
        return 3;
    } else {
        return -1;
    }
}

function playRound(humanChoice, compterChoice) {
    if (humanChoice == 3 && compterChoice == 2) {
        return "You win! Scissors beats Paper";
    } else if (humanChoice == 2 && compterChoice == 1) {
        return "You win! Paper beats Rock";
    } else if (humanChoice == 1 && compterChoice == 3) {
        return "You win! Rock beats Scissors";
    } else if (humanChoice == 2 && compterChoice == 3) {
        return "You lose! Scissors beats Paper"
    } else if (humanChoice == 1 && compterChoice == 2) {
        return "You lose! Paper beats Rock"
    } else if (humanChoice == 3 && compterChoice == 1) {
        return "You lose! Rock beats Scissors";
    } else {
        return "It's a tie!";
    }
}

function getWinnerPerRound(roundResult) {
    if (roundResult.startsWith("You win!")) {
        humanScore += 1;
        return roundResult;
    } else if (roundResult.startsWith("You lose!")) {
        computerScore +=1;
        return roundResult;
    } else {
        return roundResult;
    }
}

function showOverallWinner() {
    if (humanScore > computerScore) {
        console.log(`You won! ${humanScore} to ${computerScore} against the computer.`);
    } else if (humanScore == computerScore) {
        console.log(`You drew ${humanScore} to ${computerScore} against the computer`);
    } else {
        console.log(`You lost! ${humanScore} to ${computerScore} against the computer.`);
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const getRoundResult = playRound(humanSelection, computerSelection);
        const showWinnerCurrentRound = getWinnerPerRound(getRoundResult);
        console.log(showWinnerCurrentRound);
    }
    showOverallWinner();
}

playGame();