//Define constants
const gameBoard = document.querySelectorAll(".gameBoard > div");
const results = document.getElementById("results");
const startButton = document.getElementById("startGame");

//Variables
let cards;
let board;

//Card Fronts Array
const cardFronts = [
  { name: "Dolphin", image: "images/Dolphin.png", matched: false},
  { name: "Crab", image: "images/Crab.jpeg", matched: false},
  { name: "Stingray", image: "images/Stingray.webp", matched: false},
  { name: "Turtle", image: "images/Turtle.webp", matched: false},
  { name: "Star Fish", image: "images/Star Fish.avif", matched: false}, 
  { name: "Octopus", image: "images/Fish2.avif", matched: false},
  { name: "Sea Horse", image: "images/Sea Horse.avif", matched: false},
  { name: "JellyFish",  image: "images/JellyFish.avif", matched: false},
  { name: "Star Fish", image: "images/Star Fish.avif", matched: false},
  { name: "Dolphin", image: "images/Dolphin.png", matched: false},
  { name: "Shark", image: "images/Octopus.avif", matched: false},
  { name: "Octopus", image: "images/Fish2.avif", matched: false},
  { name: "Sea Horse", image: "images/Sea Horse.avif", matched: false},
  { name: "Turtle", image: "images/Turtle.webp", matched: false},
  { name: "Shark", image: "images/Octopus.avif", matched: false},
  { name: "JellyFish",  image: "images/JellyFish.avif", matched: false},
  { name: "Stingray", image: "images/Stingray.webp", matched: false},
  { name: "Crab", image: "images/Crab.jpeg", matched: false}
];

//User clicks the start game button
//Event Listener
startButton.addEventListener("click",init)
gameBoard.forEach(function(card,i){
  card.addEventListener("click",function(e){
    handleMove(e,cardFronts[i])
  })
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
function handleMove(event,card){
  console.log(event.target.style)
  event.target.style.backgroundImage = `url("../${card.image}")`
}

//should invoke an init function that also invoke the timer
//Intializing the game
function init() {
  timer()
console.log('myclickeventworks');
}

//Function player selects two cards, they flip over, pointer no longer works



// cards.forEach(card => {
// card.addEventListing('click', () => {


// Function to determine pair

// Else function to determine no match, cards flip back over, and take another turn

// Render Results When
//Time out
//No cards left on board
//Declair you win or you loose

// Option to play again


//assign card value to the div