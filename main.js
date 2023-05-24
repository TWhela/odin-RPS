// Variables
let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let compScore = 0;
let round = 0;
let roundResult = "";
const options = ["rock", "paper", "scissors"];
// Links
const container = document.querySelector(".container");
const rockButton = documenmt.getElementsByClassName("rock");
const paperButton = documemt.getElementsByClassName("paper");
const scissorsButtom = document.getElementsByClassName("scissors");
const result = document.createElement('p');
const computerScoreDisplay = document.getElementsByClassName("computer-score");
const playerScoreDisplay = document.getElementsByClassName("player-score");
// Functions
function chooseRock() {
    playerChoice = "rock";
    return playerChoice;
}
function choosePaper() {
    playerChoice = "paper";
    return playerChoice
}
function chooseScissors() {
    playerChoice = "scissors";
    return playerChoice;
}
//Compare scores and declare winner
function declareWinner() {
    if (playerScore > compScore)
        result.textContent = "Fantastic! You've won the game!"
    else if (compScore > playerScore)
        result.textContent = "Game Over! The Computer won!"
    else
        result.textContent = "TIE!"
}
function addPlayAgain() {
    const playAgain = document.createElement('button');
    playAgain.classList.add("playAgain");
    playAgain.textContent = "Play Again?";
    playAgain.addEventListener("click", resetGame);
    container.appendChild(playAgain);
}
function resetGame() {
    result.textContent = "";
    const playAgain = document.querySelector(".playAgain");
    container.removeChild(playAgain);
    round = 0;
    computerScoreDisplay[0].textContent = `Computer Score: ${compScore}`;
    playerScoreDisplay[0].textContent = `Player Score: ${playerScore}`;
}
// Play Game
function playRound() {
    computerChoice = options[Math.floor(Math.random() * 3)];
    if (playerChoice === computerChoice) {
            roundResult = "TIE!";
    }
    if (playerChoice === "rock" && computerChoice === "paper") {
            compScore += 1;
            roundResult = "The Computer wins this round!";
    }
    if (playerChoice === "rock" && computerChoice === "scissors") {
            playerScore += 1;
            roundResult = "You have won this round!";
    }
    if (playerChoice === "paper" && computerChoice === "scissors") {
            compScore += 1;
            roundResult = "The Computer wins this round!";
    }
    if (playerChoice === "paper" && computerChoice === "rock") {
            playerScore += 1;
            roundResult = "You have won this round!";
    }
    if (playerChoice === "scissors" && computerChoice === "rock") {
            compScore += 1;
            roundResult = "The Computer wins this round!";
    }
    if (playerChoice === "scissors" && computerChoice === "paper") {
            playerScore += 1;
            roundResult = "You have won this round!";
    }
    result.textContent = `Result: ${roundResult}`;
    result.classList.add("result");
    container.appendChild(result);
    round++;
    computerScoreDisplay[0].textContent = `Computer Score: ${compScore}`;
    playerScoreDisplay[0].textContent = `Player Score: ${playerScore}`;
    if (round === 5) {
        declareWinner();
        playerScore = 0;
        compScore = 0;
        addPlayAgain();
    }
    if (round > 5) {
        resetGame();
    }
}
rockButton[0].addEventListener("click", () => {
    chooseRock();
    playRound();
});
paperButton[0].addEventListener("click", () => {
    choosePaper();
    playRound();
});
scissorsButtom[0].addEventListener("click", () => {
    chooseScissors();
    playRound();
});