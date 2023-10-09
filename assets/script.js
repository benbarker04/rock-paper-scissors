const buttons = document.getElementsByClassName('buttons')
const playerScore = document.getElementById('player-score')
const botScore = document.getElementById('bots-score')
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

}


/*Check winner*/

function checkWinner(playerChoice, botChoice) {
    if (playerChoice == botChoice) {
        console.log('tie');
    } else if (playerChoice == "rock" && botChoice == "scissors") {
        console.log('bot wins');
    } else if (playerChoice == "scissors" && botChoice == "paper") {
        console.log('bot wins');
    }else if(playerChoice == "paper" && botChoice == "rock"){
            console.log('bot wins');
        }
    

    if (botChoice == "rock" && playerChoice == "scissors"){
        console.log('player wins');
    }else if(botChoice == "scissors" && playerChoice == "paper"){
        console.log('player wins');
    }else if(botChoice == "paper" && playerChoice == "rock"){
        alert('player wins');
    }
}


