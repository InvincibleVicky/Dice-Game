//Dice 1
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

// console.log(randomNumber1);

// var randomImage = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

var image1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomImageSource1);

//Dice 2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSource2);

//Winner
if (randomNumber1 > randomNumber2) {
  var player1 = (document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!");
} else if (randomNumber2 > randomNumber1) {
  var player2 = (document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩");
} else {
  var tie = (document.querySelector("h1").innerHTML = "Draw!");
}
