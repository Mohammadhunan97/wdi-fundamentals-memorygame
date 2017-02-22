var card = [];
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var kingpic = document.createElement("img");
kingpic.setAttribute("src","http://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/full_width_scale/public/king-logo.png?itok=F1_8OuIY");
kingpic.style.width = "64" + "px";
kingpic.style.height = "auto";
var queenpic = document.createElement("img");
queenpic.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Queen_logo.svg/2000px-Queen_logo.svg.png");
queenpic.style.width = "64" + "px";
queenpic.style.height = "auto";






console.log("JS file is connected to HTML! Woo!");
var cardOne = 'king';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'queen';

function create(){
for (var i = 0;i<4;i++){    
card[i] = document.createElement("div");
card[i].className = "card";
//document.body.appendChild(card[i]); 
document.getElementById("game-board").appendChild(card[i]);
card[i].setAttribute('data-card', cards[i]);
card[i].setAttribute('title', [i]); //this is to check if the user hasn't clicked the same card twice
card[i].addEventListener('click', isTwoCards);    
}    
    
}

function isTwoCards(){
    
    if(this.getAttribute('data-card')==='king'){ this.appendChild(kingpic);}
     if(this.getAttribute('data-card')==='queen'){ this.appendChild(queenpic);}
    
    cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play, check for a match
 
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];

  }
}
function isMatch(a){
    if(a[0] === a[1]){
      alert("You Won!!!");
      var classcard = document.getElementByClassName = "card";
    setTimeout(function(){ 
      queenpic.remove("img");
    kingpic.remove("img"); 
    }, 1000);
    
    }
    else{
      alert("Sorry, try again!");
    }
}
