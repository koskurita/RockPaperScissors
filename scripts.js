console.log("Hello, World!")

function getComputerChoice(){
    let hand = Math.floor(Math.random()*3);
    if (hand == 0){
        return "Rock";
    }
    else if (hand == 1){
        return "Paper";
    }
    else if (hand == 2){
        return "Scissors";
    }

}

function playerSelection(){
    var hand = prompt("Rock, Paper, or Scissors?");
    hand = hand.toLowerCase();
    if (hand == "rock"){
        return "Rock";
    }
    else if (hand == "paper"){
        return "Paper";
    }
    else if (hand == "scissors"){
        return "Scissors";
    }
}


let cpwin = 0;
let plwin = 0;
let tie = 0;

function playRound(e){
    let playerSelection = e.target.innerHTML;
    let res = "";
    let computerSelection = getComputerChoice();
    if (playerSelection == "Rock"){
        if (computerSelection == "Scissors"){
            plwin++;
            res =  "You Win! Rock beats Scissors";
        }
        else if (computerSelection == "Rock"){
            tie++;
            res = "You Tie! Rock ties Rock";
        }
        else if (computerSelection == "Paper"){
            cpwin++;
            res =  "You Lose! Paper beats Rock";
        }
    }
    if (playerSelection == "Paper"){
        if (computerSelection == "Scissors"){
            cpwin++;
            res =  "You Lose! Scissors beats Paper";
        }
        else if (computerSelection == "Rock"){
            plwin++;
            res =  "You Win! Paper beats Rock";
        }
        else if (computerSelection == "Paper"){
            tie++;
            res =  "You Tie! Paper ties Paper";
        }
    }
    if (playerSelection == "Scissors"){
        if (computerSelection == "Scissors"){
            tie++;
            res =  "You Tie! Scissors ties Scissors";
        }
        else if (computerSelection == "Rock"){
            cpwin++;
            res =  "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "Paper"){
            plwin++;
            res =  "You Win! Scissors beats Paper";
        }
    }
    document.querySelector('.result').innerHTML = `Player win: ${plwin}     CPU win: ${cpwin}    Tie = ${tie}`;
    console.log(res);
}


function game(){
    // for (let i = 0; i < 5; i++) {
    //     let x = playerSelection();
    //     let y = getComputerChoice();
    //     console.log(playRound(x, y));
    // }
    let x = playerSelection();
    let y = getComputerChoice();
    console.log(playRound(x, y));

    if (cpwin > plwin){
        console.log(`Cp won ${cpwin} : ${plwin} `);
    }
    else if (cpwin == plwin){
        console.log(`You tied ${cpwin} : ${plwin} `);
    }
    else if (cpwin > plwin){
        console.log(`You won ${plwin} : ${cpwin} `);
    }
    
}



const userselection = document.querySelectorAll('.selection');
userselection.forEach(selection => selection.addEventListener('click', playRound));

// game();




