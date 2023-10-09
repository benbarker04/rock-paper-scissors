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

function playGame(playerChoice){
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice]


    let botChoice = Math.floor(Math.random() * 3);

    botImage.src = `assets/images/${choices[botChoice]}.png`;
    botImage.alt = choices[botChoice];
}