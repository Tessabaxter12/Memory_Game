//Define constants
const gameBoard = document.querySelectorAll(".gameBoard > div");
const results = document.getElementById("results");
const startButton = document.getElementById("startGame");
const backImage = '../bImages/Fishbackground.avif'

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
  shuffleCards();
}

//function to shuffle
function shuffleCards(cards) {
  //Loops backwards
  for(Let [i] = cards.length -1; i > 0; i--) {
    //RandomIndex creats a random between 0 and 1, then rounds it down 
    let randomIndex = Math.floor(Math.random() * (i+1));
    //applying the random index and shuffling the order 
    cards[randomIndex].order = i;
    //takes the array index name in order
    cards[i].order = randomIndex;
  }
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
    event.target.style.backgroundImage = `url("../${card.fImage}")`
    //Once two cards are checked checks for a Match
    checkMatch()
    card.flipped = true
    } else{
      return
      //NOTE Must hit the start button to begin the game.
    }
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
    console.log(card1,card2)//NOTE MAKE A DELAY
    card1.element.style.backgroundImage=`url("${backImage}")`
    card2.element.style.backgroundImage=`url("${backImage}")`
    card1 = undefined
    card2 = undefined
  } 
}

//Game Over Functions
function gameDone(){
    if (sec<=0) {
      gameOn = false;
      resultsMessage()
      console.log ('time is up',sec)
    } else if (matched ===9) {
      console.log ('All the matches are made')
      winner = true;
      gameOn = false;
      resultsMessage()
      sec=0;
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