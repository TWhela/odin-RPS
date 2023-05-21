// Variables
let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let compScore = 0;
let round = 0;
let finalResult = "";
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
// Comparing Scores