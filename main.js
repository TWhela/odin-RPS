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
}