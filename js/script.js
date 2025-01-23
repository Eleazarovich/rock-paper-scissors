console.log("Hello, World!");

function getComputerChoice() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function getHumanChoice() {
    const humanChoice = prompt("rock, paper, scissors").toLocaleLowerCase();

    if (humanChoice == "rock") {
        return humanChoice;
    } else if (humanChoice == "paper") {
        return humanChoice;
    } else if (humanChoice == "scissors") {
        return humanChoice;
    } else {
        return "invalid choice"
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());
