// Creating Rock, Paper, and Scissors Game
let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let matchRound = 0;
let tie = 0;

function startGame(humanChoice){
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    alert("You chose: " + humanChoice);
    alert("The computer chose: " + computerChoice);

    // Rock Option
    if(humanChoice == "Rock"){
        if(computerChoice == "Rock"){
            alert("Its a tie");
            showMatchRound();
            showTie();
        }else if(computerChoice == "Paper"){
            alert("You Lose!");
            showComputerScore();
            showMatchRound();
        }else if(computerChoice == "Scissors"){
            alert("You Win!");
            showPlayerScore();
            showMatchRound();
        }
    }
    // Rock Option
    // Paper Option
    if(humanChoice == "Paper"){
        if(computerChoice == "Paper"){
            alert("Its a tie");
            showMatchRound();
            showTie();
        }else if(computerChoice == "Scissors"){
            alert("You Lose!");
            showComputerScore();
            showMatchRound();
        }else if(computerChoice == "Rock"){
            alert("You Win!");
            showPlayerScore();
            showMatchRound();
        }
    }
    // Paper Option
    // Scissors Option
    if(humanChoice == "Scissors"){
        if(computerChoice == "Scissors"){
            alert("Its a tie");
            showMatchRound();
            showTie();
        }else if(computerChoice == "Rock"){
            alert("You Lose!");
            showComputerScore();
            showMatchRound();
        }else if(computerChoice == "Paper"){
            alert("You Win!");
            showPlayerScore();
            showMatchRound();
        }
    }
    // Scissors Option
}

// Show Player Score
function showPlayerScore(){
    playerScore++;
    document.getElementById('playerScoreDisplay').innerHTML = playerScore;
}
// Show Player Score
// Show Computer Score
function showComputerScore(){
    computerScore++;
    document.getElementById('computerScoreDisplay').innerHTML = computerScore;
}
// Show Computer Score
// Show Total round
function showMatchRound(){
    matchRound++;
    document.getElementById('matchRoundDisplay').innerHTML = matchRound;
}
// Show Total round
// Show Tie
function showTie(){
    tie++;
    document.getElementById('tieDisplay').innerHTML = tie;
}
// Show Tie