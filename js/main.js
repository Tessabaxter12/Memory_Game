//array = cards
//change image to fImage(unique) then add bImage(same) in all of the card objects 
//Add the property fliped: false to all of the object
//add a check for match function that looks at the card name of the first click and compares to the card name of the second clicked
//if they are the same keep them flipped and changed matched to true for both
//if they are not the same changed flipped back to false and display the bImage instead of the fImage
//on each click assign the first card1selected and card2selected



//Define constants
const gameBoard = document.querySelectorAll(".gameBoard > div");
const results = document.getElementById("results");
const startButton = document.getElementById("startGame");

//Variables
let gameOn = false;
let counter = 0;
let card1Selected = "";
let card2Selected = "";


//Array of images of card fronts
const cardFronts = [
  { name: "Dolphin", image: "images/Dolphin.png", matched: false},
  { name: "Crab", image: "images/Crab.jpeg", matched: false},
  { name: "Stingray", image: "images/Stingray.webp", matched: false},
  { name: "Turtle", image: "images/Turtle.webp", matched: false},
  { name: "Star Fish", image: "images/Star Fish.avif", matched: false}, 
  { name: "Fish", image: "images/Fish.avif", matched: false},
  { name: "Sea Horse", image: "images/Sea Horse.avif", matched: false},
  { name: "JellyFish",  image: "images/JellyFish.avif", matched: false},
  { name: "Star Fish", image: "images/Star Fish.avif", matched: false},
  { name: "Dolphin", image: "images/Dolphin.png", matched: false},
  { name: "Octopus", image: "images/Octopus.avif", matched: false},
  { name: "Fish", image: "images/Fish.avif", matched: false},
  { name: "Sea Horse", image: "images/Sea Horse.avif", matched: false},
  { name: "Turtle", image: "images/Turtle.webp", matched: false},
  { name: "Octopus", image: "images/Octopus.avif", matched: false},
  { name: "JellyFish",  image: "images/JellyFish.avif", matched: false},
  { name: "Stingray", image: "images/Stingray.webp", matched: false},
  { name: "Crab", image: "images/Crab.jpeg", matched: false}
];

//Intializing the game
function init() {
  gameOn = true
  timer()
  //  shuffle ()
}

//function to shuffle the card fronts
// function shuffleCards = (cardFronts) {
//   let currentIndex = array.length;
//   let temporaryValue, randomIndex;
   //Shuffle elements
//   while (0 !== currentIndex) {
       //Pick the remaining element
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
       // And swap it with the current element.
//       temporaryValue = cardFront[currentIndex];
//       cardFront[currentIndex] = cardFont[randomIndex];
//       cardFront[randomIndex] = temporaryValue;
//   }
//   return cardFronts;
// }

//User clicks the start game button
//Event Listener
startButton.addEventListener("click",init)

gameBoard.forEach(function(card,i){
  card.addEventListener("click",function(e){
    //Front of card flips over
    handleMove(e,cardFronts[i])
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

//handle move allows the back of cards to be clicked
function handleMove(event,card){
  if (gameOn){
    //  console.log(event.target.style)
    console.log("the card clicked", event.target)
    console.log("this should be the card", card)
    event.target.style.backgroundImage = `url("../${card.image}")`
  }else{
    // NOTE - SEND A MESSAGE TO USER TO HIT THE START BUTTON
    return
  }
  

}

//Function player selects two cards, they flip over, pointer no longer works
// function select2Cards() {
//     if (counter === 0){
// //     let card1Selected = "";
// //     let card2Selected = "";
// //   }
// //   else {
//         this.card2Selected
// //   }
// // }

// Function to determine pair

// Else function to determine no match, cards flip back over, and take another turn
//const noMatch = function(card1Selected, card2Selected) {

//}
// Render Results When
//Time out
//No cards left on board
//Declair you win or you loose

// Option to play again
//function to reset the game
// resetButton.addEventListener('click',function() {
//   document.location.reload();
// })