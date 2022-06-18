//play fields
const container = document.querySelector("#container");
const playField = document.querySelector('#playField');
const buttonField = document.querySelector('#buttonField');
const picField = document.querySelector('#picField')
const btn = document.querySelector('.btn');

//results and feedback of round


const roundResult1 = document.createElement('h2');
playField.appendChild(roundResult1);

const roundResult2 = document.createElement('p');
playField.appendChild(roundResult2);


//button field for input
const rock = document.querySelector('#rock');
rock.classList.add('rock');
rock.addEventListener('click', () => {playRound(0)});


const paper = document.querySelector('#paper');
paper.classList.add('paper');
paper.addEventListener('click', () => {playRound(1)});


const scissor = document.querySelector('#scissor');
scissor.classList.add('scissors');
scissor.addEventListener('click', () => {playRound(2)});


//script
function computerPlay() {
   let computerSelection = Math.floor(Math.random() * 300)%3;
   
   
   return computerSelection;
}



function playRound(playerPlay) {
    let computerSelection = computerPlay()
        if (computerSelection == 0) {
            computerHand = "rock";
            computerPlayPic = document.getElementById('computerImage').src = './images/rock/rocklose.jpeg';
            } else if (computerSelection == 1) {
                computerHand = "paper";
                computerPlayPic = document.getElementById('computerImage').src = './images/paper/paperlose.jpeg';
            } else {
                computerHand = "scissors";
                computerPlayPic = document.getElementById('computerImage').src = './images/scissor/scissorlose.jpeg';
            }
       console.log("computer plays " + computerHand);
    
       if (playerPlay == 0) {
        playerHand = "rock";
        playerPlayPic = document.getElementById('playerImage').src = './images/rock/rocklose_player.jpeg';
       } else if (playerPlay == 1) {
           playerHand = "paper";
           playerPlayPic = document.getElementById('playerImage').src = './images/paper/paperlose_player.jpeg';
       } else {
           playerHand = "scissors";
           playerPlayPic = document.getElementById('playerImage').src = './images/scissor/scissorlose_player.jpeg';
       }
    let result = playerPlay - computerSelection;

    if (result == 0) {
        roundResult1.textContent = 'ITS A TIE'
        roundResult2.textContent = "Player chooses: " + playerHand + "      Computer chooses: " + computerHand;
        return 0;
    } else if (result == -1 || result == 2) {
        roundResult1.textContent = 'PLAYER LOST'
        roundResult2.textContent = "Player chooses: " + playerHand + "      Computer chooses: " + computerHand ;
        return -1;
    } else {
        roundResult1.textContent = 'PLAYER WINS'
        roundResult2.textContent = "Player chooses: " + playerHand + "      Computer chooses: " + computerHand;
        return 1;
    }
    
}

function game() {
    let playerWins = 0, computerWins = 0, tie = 0, winner = 0;
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
    