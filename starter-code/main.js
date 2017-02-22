var card = [];

console.log("JS file is connected to HTML! Woo!");
var cardOne = 'king';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'queen';

if(cardTwo === cardFour){
    alert("You found a match!");
}else{
    alert("Sorry, try again.");
}

function create(){
for (var i = 0;i<4;i++){    
card[i] = document.createElement("div");
card[i].className = "card";
//document.body.appendChild(card[i]); 
document.getElementById("game-board").appendChild(card[i]);
    }
}
