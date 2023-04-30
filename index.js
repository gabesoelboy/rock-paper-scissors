const options = ["rock", "paper", "scissors"];

let playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();

while (!options.includes(playerChoice.toLowerCase())) {
    playerChoice = prompt("Invalid choice. Choose rock, paper, or scissors");
}

const computerChoice = options[Math.floor(Math.random() * options.length)];

let result; 

if (playerChoice === computerChoice) {
    result = "It's a tie!";
} else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
) {
    result = "You win!";
} else {
    result = "You lose!";
}

alert(`You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`)