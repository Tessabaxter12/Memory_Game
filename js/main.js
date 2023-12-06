//array = cards
//change image to fImage(unique) then add bImage(same) in all of the card objects 
//Add the property flipped: false to all of the object
//add a check for match function that looks at the card name of the first click and compares to the card name of the second clicked
//if they are the same keep them flipped and changed matched to true for both
//if they are not the same changed flipped back to false and display the bImage instead of the fImage
//on each click assign the first card1selected and card2selecte

//Define constants
const gameBoard = document.querySelectorAll(".gameBoard > div");
const results = document.getElementById("results");
const startButton = document.getElementById("startGame");
const backImage = '../bImages/Fishbackground.avif'

//Variables
let gameOn = false;
let card1;
let card2;

//Array of images of card fronts
const cards = [
  { name: "Dolphin", fImage: "fImages/Dolphin.png", matched: false, flipped: false},
  { name: "Crab", fImage: "fImages/Crab.jpeg", matched: false, flipped: false},
  { name: "Stingray", fImage: "fImages/Stingray.webp", matched: false, flipped: false},
  { name: "Turtle", fImage: "fImages/Turtle.webp", matched: false, flipped: false},
  { name: "Star Fish", fImage: "fImages/Star Fish.avif", matched: false, flipped: false}, 
  { name: "Fish", fImage: "fImages/Fish.avif", matched: false, flipped: false},
  { name: "Sea Horse", fImage: "fImages/Sea Horse.avif", matched: false, flipped: false},
  { name: "JellyFish",  fImage: "fImages/JellyFish.avif", matched: false, flipped: false},
  { name: "Star Fish", fImage: "fImages/Star Fish.avif", matched: false, flipped: false},
  { name: "Dolphin", fImage: "fImages/Dolphin.png", matched: false, flipped: false},
  { name: "Octopus", fImage: "fImages/Octopus.avif", matched: false, flipped: false},
  { name: "Fish", fImage: "fImages/Fish.avif", matched: false, flipped: false},
  { name: "Sea Horse", fImage: "fImages/Sea Horse.avif", matched: false, flipped: false},
  { name: "Turtle", fImage: "fImages/Turtle.webp", matched: false, flipped: false},
  { name: "Octopus", fImage: "fImages/Octopus.avif", matched: false, flipped: false},
  { name: "JellyFish",  fImage: "fImages/JellyFish.avif", matched: false, flipped: false},
  { name: "Stingray", fImage: "fImages/Stingray.webp", matched: false, flipped: false},
  { name: "Crab", fImage: "fImages/Crab.jpeg", matched: false, flipped: false}
];

//Intializing the game
function init() {
  gameOn = true
  timer()
//  shuffle()
}

//function to shuffle the card fronts
// function shuffleCards = (cards){
//   let currentIndex = array.length;
//   let temporaryValue, randomIndex;
//   //Shuffle elements
//   while (0 !== currentIndex) {
//     //Pick the remaining element
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     // And swap it with the current element.
//     temporaryValue = cardFront[currentIndex];
//     cardFront[currentIndex] = cardFont[randomIndex];
//     cardFront[randomIndex] = temporaryValue;
// }
//   return cards;
// }

//User clicks the start game button
//Event Listener
startButton.addEventListener("click",init)
gameBoard.forEach(function(card,i){
  cards[i].element=gameBoard[i]
  card.addEventListener("click",function(e){
    //Front of card flips over
    handleMove(e,cards[i])
    //Starts timer when first card flipped
  })
})

//Timer Function
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

//Tallys Wrong Moves

//Handle Move Function allows the back of cards to be clicked
function handleMove(event,card){
  if (gameOn){
    
    if (!card1){
      card1 = card
    } else if (card1){
      card2 = card
    } 

    //Allows user to flip the cards 
    event.target.style.backgroundImage = `url("../${card.fImage}")`
    checkMatch ()
    card.flipped = true
    } else {
      return
      //Must hit the start button to begin the game.
    }
    console.log(card1)
    console.log(card2)
  }

//Check 2 cards to see if they match
function checkMatch (){
  if (card1?.name === card2?.name) {
    card1.match = true 
    card2.match = true
    card1 = undefined
    card2 = undefined
  } else if(card1 && card2) {
    console.log(card1,card2)
    card1.element.style.backgroundImage=`url("${backImage}")`
    card2.element.style.backgroundImage=`url("${backImage}")`
    card1 = undefined
    card2 = undefined
  } 
}







// Render Results When
// function renderMessage() {
//   if (cards === flipped) && (timer > 0) {MessageChannel.innerText = "You Win"}
//   else if(cards ! flipped) && (timer === 0) {MessageChannel.innerText = "You loose"}
//   }
// }
//Time out
//No cards left on board
//Declair you win or you loose

// Option to play again
//function to reset the game
// resetButton.addEventListener('click',function() {
//   document.location.reload();
// })