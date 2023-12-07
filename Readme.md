# Title: Memory Game / Concentration

Game History: The first published game form of concentration, was in 1959 by Ravensburger. However it is stated that in the 16th century people in Japan matched pictures painted on shells.

## Technologies Used: 

- HTML
- CSS
- JavaScript

Link To Game: https://github.com/Tessabaxter12/Memory_Game

Game Rules: This is a one player game, that takes attention and concentration. The game begins when the player hits the start game button, which also starts the timer. The player then selects two cards that turn over. If the cards match, then there is a match, and they keep playing. If they don't match then the cards turn back over, and they keep playing. The player will keep playing till all the cards are facing over or until the timer runs out. Then a message will show you win or you loose and the cards will flip over.

## Wireframe

![screenshot]("../fImages/Wireframe.PNG")

## Users Stories
As a user I want to
- Click start game button and have the game start
- See the timer start once start button is clicked and see the time running.
- See you win or you loose

## Psuedocode
- Define constants
    - Game Board
    - Button
    - Results

- Define variables
    - Cards
    - Time
    - Winner

- Intializing the game and timer starts

- Handle move Function allows player to select two cards, they flip over.

- Match function checks for a pair. If no pair then cards flip over, and try again. Else if there is a match, cards stay on board, and keep trying.

- Render Results When
    - Time runs out
    - No cards left on board
    - Declair you win or you loose

## What's Next
- Add shuffle
- Add fastest time