
const defaultPlayerSelect = 1;
const defaultMultiplayer = 0;


const container = document.querySelector("#container");
const playField = document.querySelector('#playField');
const buttonField = document.querySelector('#buttonField');
const picField = document.querySelector('#picField')
const btn = document.querySelector('.btn');

const roundResult1 = document.createElement('h2');
playField.appendChild(roundResult1);

const playerFeedback1 = document.createElement('p');
playField.appendChild(playerFeedback1);

const playerFeedback2 = document.createElement('p');
playField.appendChild(playerFeedback2);

const onePlayer = document.querySelector('#oneplayer').addEventListener('click',() => {players = 0;if (players != 1){roundResult1.textContent = 'SINGLE PLAYER MODE ACTIVATED';}});
const twoPlayer = document.querySelector('#twoplayer').addEventListener('click',() => {players = 1;if (players != 0){roundResult1.textContent = 'MULTIPLAYER MODE ACTIVATED'}});

const player1Name = document.querySelector('#player1Name');
const player2Name = document.querySelector('#player2Name');

const playBtn1 = document.querySelectorAll('.playBtn1');
playBtn1.forEach((playBtn1) => {
    playBtn1.addEventListener("click", function () {
      const pInput = this.textContent;
      if (players == 0) {
        singlePlayer(pInput);
      } else {
        multiplayer(pInput);
      }
    })
})

let players = defaultMultiplayer;

//script
function singlePlayer(x) {
    //document.getElementsByClassName('#player2Name').style.visibility = 'hidden';
    console.log('singal')
    let player1 = x
    playerFeedback1.textContent = 'player 1 picked'    
    let player2 = computerSelect();
    playerFeedback2.textContent = 'player 2 picked'
    console.log('player1 = ' + player1)
    console.log('player2 = ' + player2)
    result(player1,player2);
}

function multiplayer(x) {
    //document.getElementsByClassName('#player2Name').style.visibility = 'visible';
    let player1 = x;
    playerFeedback1.textContent = 'player 1 picked'
    const playBtn2 = document.querySelectorAll('.playBtn2');
    playBtn2.forEach((playBtn2) => {
    playBtn2.addEventListener("click", function () {
      const player2 = this.textContent;
      playerFeedback2.textContent = 'player 2 picked'
      result(player1,player2)})});
 
}

function computerSelect() { 
    const cOptions = ["Rock", "Paper", "Scissors"];
    const computerSelection = cOptions[Math.floor(Math.random() * 3)];
    return computerSelection;
}
      
function result(player1,player2) { 
   if (player1 == player2) {
        roundResult1.textContent = 'ITS A TIE'
        if (player1 == 'Rock') {
            document.getElementById('player1Image').src = './images/rock/rocktie_player.jpeg';
            document.getElementById('player2Image').src = './images/rock/rocktie.jpeg';  
        } else if (player1 == 'Paper') {
            document.getElementById('player1Image').src = './images/paper/papertie_player.jpeg'; 
            document.getElementById('player2Image').src = './images/paper/papertie.jpeg'; 
        } else {
            document.getElementById('player1Image').src = './images/scissor/scissortie_player.jpeg'; 
            document.getElementById('player2Image').src = './images/scissor/scissortie.jpeg'; 
        }
         
    } else if (player1 == 'Rock') {
        if (player2 == 'Scissors') {
            roundResult1.textContent = 'PLAYER1 WINS'
            document.getElementById('player1Image').src = './images/rock/rockwin_player.jpeg'; 
            document.getElementById('player2Image').src = './images/scissor/scissorlose.jpeg'; 
        } else {
            roundResult1.textContent = 'PLAYER1 LOST'
            document.getElementById('player1Image').src = './images/rock/rocklose_player.jpeg'; 
            document.getElementById('player2Image').src = './images/paper/paperwin.jpeg'; 
        }   
        //roundResult2.textContent = "Player1 chooses: " + "      player2 chooses: " ;

    } else if (player1 == 'Paper') {
        if (player2 == 'Rock') {
            roundResult1.textContent = 'PLAYER1 WINS'
            document.getElementById('player1Image').src = './images/paper/paperwin_player.jpeg'; 
            document.getElementById('player2Image').src = './images/rock/rocklose.jpeg'; 
        } else {
            roundResult1.textContent = 'PLAYER1 LOST'
            document.getElementById('player1Image').src = './images/paper/paperlose_player.jpeg'; 
            document.getElementById('player2Image').src = './images/scissor/scissorwin.jpeg'; 
        }
        //roundResult2.textContent = "Player chooses: "  + "      player2 chooses: ";
        
    } else {
        if (player2 == 'Paper') {
            roundResult1.textContent = 'PLAYER1 WINS'
            document.getElementById('player1Image').src = './images/scissor/scissorwin_player.jpeg'; 
            document.getElementById('player2Image').src = './images/paper/paperlose.jpeg'; 
        } else {
            roundResult1.textContent = 'PLAYER1 LOST'
            document.getElementById('player1Image').src = './images/scissor/scissorlose_player.jpeg'; 
            document.getElementById('player2Image').src = './images/rock/rockwin.jpeg'; 
        }
        //roundResult2.textContent = "Player chooses: "  + "      player2 chooses: ";
    }
    playerFeedback1.textContent = "Player1 chooses: " + player1;
    playerFeedback2.textContent = "player2 chooses: " + player2;
} 




        
        
        
    
    
    /*let playerWins = 0, computerWins = 0, tie = 0, winner = 0;
        console.log("-----------Round " + (i +1) + " -----------")
        winner = playRound();
        if (winner == 0) {
            tie++;
        } else if (winner == 1) {
            playerWins++;
        } else {
            computerWins++;
        } */
    
    

/*function singlePlayerSelect() {
    rock.addEventListener('click', () => {playerSelection = 'rock'; document.getElementById('player1Image').src = './images/rock/rocklose.jpeg'; });
    paper.addEventListener('click', () => {playerSelection = 'paper'; document.getElementById('player1Image').src = './images/paper/paperlose.jpeg'; setPlayerPicPaper});
    scissor.addEventListener('click', () => {playerSelection = 'scissors'; document.getElementById('player1Image').src = './images/scissor/scissorlose.jpeg'; setPlayerPicScissor});
}

function setSinglePlayerPicRock() {multiplayer(1)};
function setSinglePlayerPicPaper() {multiplayer(2)}; 
function setSinglePlayerPicScissor() {multiplayer(3)};


function multiplayerSelect() {
    rock.addEventListener('click', () => {playerSelection = 'rock'; document.getElementById('player1Image').src = './images/rock/rocklose.jpeg'; setMultiplayerPicRock});
    paper.addEventListener('click', () => {playerSelection = 'paper'; document.getElementById('player1Image').src = './images/paper/paperlose.jpeg'; setMultiplayerPicPaper});
    scissor.addEventListener('click', () => {playerSelection = 'scissors'; document.getElementById('player1Image').src = './images/scissor/scissorlose.jpeg'; setMultiplayerPicScissor});
}

function setMultiplayerPicRock() {multiplayer(1)};
function setMultiplayerPicPaper() {multiplayer(2)}; 
function setMultiplayerPicScissor() {multiplayer(3)}; 

if (computerSelection == 1) 
    {document.getElementById('player2Image').src = './images/rock/rocklose_player.jpeg';} else if (computerSelection == 2) 
    {document.getElementById('player2Image').src = './images/paper/paperlose.jpeg';} else
    {document.getElementById('player2Image').src = './images/scissor/scissorlose.jpeg'}
    
    */
