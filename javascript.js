

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
   console.log(computerHand);
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
       console.log(playerHand);
    return playerSelection;
}


function playRound() {
    let result = playerPlay() - computerPlay();
    
    console.log(result);
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
    for (let i = 0; i < rounds; i++) {
        let wins = 0;
        wins = wins + playRound();

    }
}


game();