//Define constants
const gameBoard = document.querySelectorAll(".gameBoard > div");
const results = document.getElementById("results");
const startButton = document.getElementById("startGame");
console.log(gameBoard);
//const cardFronts = document.querySelectorAll('main > img');

//Variables
let cards;
let board;
let interval;
let firstCard = false;
let secondCard = false;

//Card Array
const cardFronts = [
  { name: "Dolphin", image: "images/Dolphin.png", matched: false},
  { name: "Star Fish", image: "images/Star Fish.avif", matched: false},
  { name: "Shark", image: "images/Shark.avif", matched: false},
  { name: "Octopus", image: "images/Octopus.avif", matched: false},
  { name: "Sea Horse", image: "images/Sea Horse.avif", matched: false},
  { name: "Turtle", image: "images/Turtle.webp", matched: false},
  { name: "JellyFish",  image: "images/JellyFish.avif", matched: false},
  { name: "Stingray", image: "images/Stingray.webp", matched: false},
  { name: "Crab", image: "images/Crab.jpeg", matched: false}
];

//Event Listener
startButton.addEventListener("click",init)
gameBoard.forEach(function(card){
  card.addEventListener("click",handleMove)
})

//Timer & Restart Button
function timer(){
  let sec = 60;
  let timer = setInterval(function(){
      document.getElementById('time').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}

//handle move
function handleMove(event){
  console.log(event.target)
}


//Intializing the game
//init();

function init() {
  timer()
  // Initialize the board with shuffled tiles (2 for each img)
//board = getShuffledCardFronts();
// Verify that board has 2 of each tile, shuffled
console.log('myclickeventworks');
}

//Function player selects two cards, they flip over, pointer no longer works
// cards.forEach(card => {
// card.addEventListing('click', () => {
// //flip card
// });
// });


// Function to determine pair

// Else function to determine no match, cards flip back over, and take another turn

// Render Results When
//Time out
//No cards left on board
//Declair you win or you loose

// Option to play again

//user clicks start game button
//cache the start button and an eventlistern

//should invoke an init function that also invoke the timer
//assign card value to the div