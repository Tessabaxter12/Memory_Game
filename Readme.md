# Title: Memory Game / Concentration

Game History: The first published game form of concentration, was in 1959 by Ravensburger. However it is stated that in the 16th century people in Japan matched pictures painted on shells.

## Technologies Used: 

    - HTML
    - CSS
    - JavaScript

Link To Game: http://127.0.0.1:5500/

Game Rules: This is a two player game, that takes attention and concentration. Cards get randomly placed face down on the grid board. Then each player takes a turn by selecting two cards that turn over. If the cards match, then the player keeps them. If they don't match, the cards turn back over, and the next player goes. If the player gets a match, they get to go again, until they fail to get a match. The player with the most cards wins.

## Wireframe

![screenshot](images/7E2D854C-C7B6-48EE-9CB9-B760A67121EE_1_105_c.jpeg)

## Users Stories

As a user I want to
- Click start game button and have the game start
- Click two cards and determine match or next players turn
- Be able to keep track of pairs for each player
- At end of game be able to determine which player wins
- Be able to restart game new round with same player
- Be able to keep track of round wins with each player
- Be able to exit rounds and start a new game

## Psuedocode

- Define constants
    - Cards images of animals

- Define variables
    
- Function for sorting cards onto 4x4 grid

- Intializing the game players turn

- Function player one selects two cards, they flip over, pointer no longer works.

- function to determine pair, cards go away, pair gets added to that players total pairs, take anouther turn

- function to determine no match, turn over

- function to rotate to next player, repeat loop

- Time function / Loop break

- Render Results When
    - No cards left on board
    - Pairs counted
    - Declair a winner
    - Round over results tallied
    - Option to play again