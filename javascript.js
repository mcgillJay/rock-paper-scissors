

function computerPlay() {
   let computerSelection = Math.floor(Math.random() * 3);
   let computerHand = "";
   if (computerSelection == 0) {
    computerHand = "rock";
   } else if (computerSelection == 1) {
       computerHand = "paper";
   } else {
       computerHand = "scissors";
   }
   console.log("computer plays " + computerHand);
   return computerSelection;
}

function playerPlay() {
    let playerSelection = prompt("rock:0\npaper:1\nscissors:2\nselect throw: ");
    let playerHand = "";
    if (playerSelection == 0) {
        playerHand = "rock";
       } else if (playerSelection == 1) {
           playerHand = "paper";
       } else {
           playerHand = "scissors";
       }
       console.log("Player plays " + playerHand);
    return playerSelection;
}


function playRound() {
    let result = playerPlay() - computerPlay();
    //console.log(result);
    if (result == 0) {
        console.log("its a tie");
        return 0;
    } else if (result == -1 || result == 2) {
        console.log("Player lost");
        return -1;
    } else {
        console.log("Player wins");
        return 1;
    }
}

function game(rounds=5) {
    let playerWins = 0, computerWins = 0, tie = 0, winner = 0;
    for (let i = 0; i < rounds; i++) {
        console.log("-----------Round " + (i +1) + " -----------")
        winner = playRound();
        if (winner == 0) {
            tie++;
        } else if (winner == 1) {
            playerWins++;
        } else {
            computerWins++;
        }

    }
    console.log("game over!\n scores:\n player: " + playerWins + "\n Computer: " + computerWins + "\n Ties: " + tie)
}


game();