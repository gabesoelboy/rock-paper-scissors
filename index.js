const options = ["rock", "paper", "scissors"];
const images = document.querySelectorAll(".game img");
const messageDiv = document.getElementById("message");
const scoreDiv = document.getElementById("score");
const resetButton = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;

images.forEach(img => {
    img.addEventListener("click", function() {
        let playerChoice = this.dataset.choice;

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
            playerScore++;
        } else {
            result = "You lose!";
            computerScore++;
        }

        messageDiv.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`;
        scoreDiv.textContent = `Your score: ${playerScore}, Computer's score: ${computerScore}`;

        if (playerScore === 5 || computerScore === 5) {
            let finalResult = playerScore > computerScore ? "Congratulations, you won the series!" : "Sorry, you lost the series.";
            messageDiv.textContent = `${finalResult} Your score: ${playerScore}, Computer's score: ${computerScore}`;
            resetButton.style.display = "block";
        }
    });
});

resetButton.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;
    messageDiv.textContent = "";
    scoreDiv.textContent = "";
    resetButton.style.display = "none";
});

