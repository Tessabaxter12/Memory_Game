//Define constants
const gameBoard = document.querySelectorAll(".gameBoard > div");
const results = document.getElementById("results");
const startButton = document.getElementById("startGame");
const backImage = 'bImages/Fishbackground.avif'

//Variables
let gameOn = false;
let card1;
let card2;
let winner;
let sec;
let matched = 0;

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

//Starts the game
function init() {
  gameOn = true
  winner = false;
  sec = 60;
  timer()
}

//User clicks the start game button with Event Listener
startButton.addEventListener("click",init)
gameBoard.forEach(function(card,i){
  cards[i].element=gameBoard[i]
  card.addEventListener("click",function(e){
    //Front of card flips over
    handleMove(e,cards[i])
  })
})

//Timer Function
function timer(){
  let timer = setInterval(function(){
      document.getElementById('time').innerHTML='00:'+sec;
      sec--;
      if(sec < 0) {
        gameDone()
        clearInterval(timer);
      }
  }, 1000);
}

//Handle Move Function allows the back of cards to be clicked
function handleMove(event,card){
  if(gameOn){
    //No cards clicked
    if(!card1){
    //1st card clicked
      card1 = card
    //2nd card clicked  
    } else if(card1){
      card2 = card
    }
    //Allows user to flip the cards 
    event.target.style.backgroundImage = `url("${card.fImage}")`
    //Once two cards are checked checks for a Match
    checkMatch()
    card.flipped = true
    } else{
      return
    }
    //Runs game done function
    gameDone()
  }

//Check 2 cards to see if they match
function checkMatch(){
  //If a match is found
  if(card1?.name === card2?.name) {
    card1.match = true 
    card2.match = true
    card1 = undefined
    card2 = undefined
    //Counts number of matchs
    matched++
    console.log('matched', matched)
  //If no match is found
  } else if(card1 && card2) {
    console.log(card1,card2)
    setTimeout(function(){
    //Flips both cards over
    card1.element.style.backgroundImage=`url("${backImage}")`
    card2.element.style.backgroundImage=`url("${backImage}")`
    card1 = undefined
    card2 = undefined
    },250)
  } 
}

//Game Over Functions
function gameDone(){
    if (sec<=0) {
      gameOn = false;
      resultsMessage()
      //Flips all cards back over
      setTimeout(function(){
        gameBoard.forEach(function(card,i){
          card.style.backgroundImage=`url("${backImage}")`
        })  
        },1000)
    } else if (matched ===9) {
      winner = true;
      gameOn = false;
      resultsMessage()
      sec=0;
      //Flips all cards back over 
      setTimeout(function(){
      gameBoard.forEach(function(card,i){
        card.style.backgroundImage=`url("${backImage}")`
      })  
      },1000)
    }
  }

  //Sends Results Message To User
  function resultsMessage() {
    if (winner) {
      results.innerHTML = `
        <h2>
          You Win
        </h2>
      `
    } else {
      results.innerHTML = `
        <h2>
          You lose
        </h2>
      `
    }
  }