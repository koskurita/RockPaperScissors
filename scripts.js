let cpwin = 0;
let plwin = 0;
let tie = 0;
let roundWinner = '';

//UI
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const scoreInfo = document.getElementById('scoreInfo');
const roundResult = document.getElementById('roundResult');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

rockBtn.addEventListener('click', () => handleClick('Rock'));
paperBtn.addEventListener('click', () => handleClick('Paper'));
scissorsBtn.addEventListener('click', () => handleClick('Scissors'));
restartBtn.addEventListener('click', resetGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelection) {
    if (gameOver()){
        openEndgameModal()
        return;
    }
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    
    if (gameOver()){
        openEndgameModal()
        return;
    }
}

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1: 
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    console.log(computerSelection, playerSelection)
    if (playerSelection === computerSelection){
        tie++;
        roundWinner = 'tie';
    }
    else if (
        (playerSelection === "Rock" && computerSelection == "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ){
        plwin++;
        roundWinner = 'Player';
    }
    else if (
        (playerSelection === "Rock" && computerSelection == "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
    ){
        cpwin++;
        roundWinner = 'Computer';
    }
    console.log(plwin,cpwin)
    updateScore(playerSelection, computerSelection, roundWinner);
}

function toEmoji(hand){
    switch (hand){
        case "Rock":
            return "✊";
        case "Paper":
            return "✋";
        case "Scissors":
            return "✌";
    }
}

function updateScore(playerSelection, computerSelection, roundWinner) {
    playerScore.textContent = `Computer: ${plwin}`;
    computerScore.textContent = `Computer: ${cpwin}`;
    playerSign.textContent = `${toEmoji(playerSelection)}`;
    computerSign.textContent = `${toEmoji(computerSelection)}`;

    if (roundWinner === "tie") {
        scoreInfo.textContent = "It's a tie!";
        roundResult.textContent = `${playerSelection} ties with ${computerSelection}`;
    } 
    else if (roundWinner === "Player"){
        scoreInfo.textContent = `You won!`;
        roundResult.textContent = `${playerSelection} beats ${computerSelection}`;
    }
    else if (roundWinner ==="Computer"){
        scoreInfo.textContent = `You lost!`;
        roundResult.textContent = `${computerSelection} beats ${playerSelection}`;
    }
}

function gameOver(){
    return plwin >= 5 || cpwin >= 5;
}

function resetGame(){
    plwin = 0;
    cpwin = 0;
    scoreInfo.textContent = 'Choose Your Weapon!';
    roundResult.textContent = 'First to score 5 wins';
    playerScore.textContent = `Computer: ${plwin}`;
    computerScore.textContent = `Computer: ${cpwin}`;
    playerSign.textContent = '❔';
    computerSign.textContent = '❔';
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}




function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
    if (plwin > cpwin) {
        return endgameMsg.textContent = 'You won!';
    }
    else {
        return endgameMsg.textContent = 'You Lost!';
    }
}

function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}


