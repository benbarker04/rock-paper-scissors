const buttons = document.getElementsByClassName('buttons')
const playerImage = document.getElementById('player-image')
const botImage = document.getElementById('bot-image')
const choices = ['rock' ,'paper' ,'scissors']

/*Event listener for buttons*/
for (let button of buttons) {
    button.addEventListener('click', function(){
        let playerChoice = this.getAttribute('data-choice');
        playGame(playerChoice)
    } )
}

/*Main function for game */
function playGame(playerChoice){
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice]


    let botChoice = Math.floor(Math.random() * 3);

    botImage.src = `assets/images/${choices[botChoice]}.png`;
    botImage.alt = choices[botChoice];

    let result = checkWinner(choices[botChoice], choices[playerChoice]);
    gameFinsied(playerScore, botScore);
}


/*Check winner and add to score*/

function checkWinner(playerChoice, botChoice) {
    if (playerChoice == botChoice) {
        console.log('tie');
    } else if (playerChoice == "rock" && botChoice == "scissors") {
        let botScore = parseInt(document.getElementById('bots-score').innerText);
        document.getElementById('bots-score').innerText = ++botScore
        console.log('bot wins');
    } else if (playerChoice == "scissors" && botChoice == "paper") {
        botScore = parseInt(document.getElementById('bots-score').innerText);
        document.getElementById('bots-score').innerText = ++botScore
        console.log('bot wins');
    }else if(playerChoice == "paper" && botChoice == "rock"){
        botScore = parseInt(document.getElementById('bots-score').innerText);
        document.getElementById('bots-score').innerText = ++botScore
            console.log('bot wins');
        }
    

    if (botChoice == "rock" && playerChoice == "scissors"){
        let playerScore = parseInt(document.getElementById('player-score').innerText);
        document.getElementById('player-score').innerText = ++playerScore
        console.log('player wins');
    }else if(botChoice == "scissors" && playerChoice == "paper"){
        playerScore = parseInt(document.getElementById('player-score').innerText);
        document.getElementById('player-score').innerText = ++playerScore
        console.log('player wins');
    }else if(botChoice == "paper" && playerChoice == "rock"){
        playerScore = parseInt(document.getElementById('player-score').innerText);
        document.getElementById('player-score').innerText = ++playerScore
        console.log('player wins');
    }
}

/*Check scores and end game if 5 points is reached*/
function gameFinsied(playerScore,botScore){
    if (playerScore == 5){
        alert("You have won refresh the page to restart")
        document.getElementsByTagName('choices').disabled == true
    } else if (botScore == 5 ){
        alert("You have lost refresh the page to try again")
        document.getElementsByTagName('choices').disabled == true
    }
}