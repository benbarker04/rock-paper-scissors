# Rock Paper Scissors

Rock Paper Scissors is a game that helps the user make decisions with a simple game with truly random results. The user will have to use skill and luck as the computer player chooses completely randomly.

Users of this game will learn the rules of the classic game rock, paper, scissors so they can apply them in decision-making in their own lives. This site will be targetted at children and adults alike as a simple website with a minimalistic style to learn, practice and have fun with.

![responsivedesign](https://github.com/benbarker04/rock-paper-scissors/assets/131170958/f33e8396-cefe-4a09-bc3e-c111911ede2a)

## Features

### Existing Features

- Header
   - Featured at the top of the page, the header shows the website and game name 'Rock Paper Scissors' in a font that goes with the minimalistic style and clearly contrasts with the background.
   - This header clearly tells the user what game they are playing.

   ![header](https://github.com/benbarker04/rock-paper-scissors/assets/131170958/66e7fce7-fbe7-4dff-9097-c267e2aac2ee)

- Game Options Area
   - The game options area includes a clear instruction telling the user to make a choice of either rock, paper or scissors in which these options are interactive buttons that the user can click to make their choice.
   - This section provides interactive buttons that the user can click to make their choice and play the game.
   - When the user hovers their mouse over a button it will be underlined to make it clear to the user what button they are going to press
 
![options](https://github.com/benbarker04/rock-paper-scissors/assets/131170958/57bdc132-cf3b-48c7-99db-b94cbb2c30c0)

- The Game Area
   - When the user clicks an option the corrersponding image is shown on their side of the game board.
   - The javascript code chooses a random option for the computer player, displays the image relating to the computers choice, and then determines who the winner is and adds a point to the winers score.
   - The winner is shown by a point being added to the score of the winner.
   - The first to five points wins the game which is shown by an alert popping up telling the user they have either won or lost and to refresh the page to restart
   - Once the game is over the buttons are disabled until the user refreshes the page.
 
 ![gamearea](https://github.com/benbarker04/rock-paper-scissors/assets/131170958/8c65bc61-0903-4002-bf02-93ddaa79c446)

- The Footer
   - The footer shows the rules of rock, paper, scissors.
   - The footer is important to the user because it clearly explains how to play the game.
 
  ![footer](https://github.com/benbarker04/rock-paper-scissors/assets/131170958/475a9c43-0c07-4b19-9939-c76eabc31fc7)

## Features Left To Implement

- Where there is time i would like to add a feature that pops up onto the screen saying who has won that round.

## Testing

- I tested playing this game in different browsers such as Chrome, Microsoft Edge and Safari.
- I have confirmed that the game results are always correct.
- I have confirmed that the header, instructions, options and footer text are all readable and easy to understand.
- I have confirmed that the colours and font chose are easy to read and accesible by running it through lighthouse in devtools 

![lighthouse](https://github.com/benbarker04/rock-paper-scissors/assets/131170958/348af1bf-f37b-4462-9a09-0793b039eadd)
- I have confirmed that the website is responsive, looks good and functions on all standard screen sizes using the devtools device tool bar.

### Bugs

- When i deployed my project to github pages i found no bugs.

### Validator Testing

- HTML
   - No errors were returned when passing through the official W3C validator.
- CSS
   - No errors were returned when passing through the official (Jigsaw) validator.
 
## Deployment

- This site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the settings tab
    - From the source drop-down menu, select the master branch
    - Once the master branch has been selected, the page provides the live link to the completed website.

The live link can be found right here - [Rock Paper Scissors](https://benbarker04.github.io/rock-paper-scissors/)

## Credits

### Content 

- The code to style the game area and some of the javascript code was taken from a [Code Institute video](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/)

### Media

- The favicon and the placeholder gamearea images was take from [Flaticon](https://www.flaticon.com/free-icon/rock-paper-scissors_6793733)
- The images of the choices were taken from [Cristiano Zoucas](https://thenounproject.com/cristiano.zoucas/)
