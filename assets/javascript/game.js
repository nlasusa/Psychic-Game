// Array that lists the letter choices 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];

//  Variables to hold the number of wins, losses and guesses left
var wins = 0 
var losses = 0 
var guessesRemaining =9 
var lettersGuessed =[]
var computerGuess =[]
var userGuess = document.onkeyup;

// Computer makes a guess from the options array at window onload
window.onload = function() {
    var techGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];
    computerGuess.push(techGuess);
    console.log (computerGuess[0])
}

// This function runs when a user presses a key
document.onkeyup = function(event) {
    var userGuess= event.key;
    lettersGuessed.push(userGuess);
    console.log (computerGuess[0]);

// Recording game
if ((userGuess === computerGuess[0] && guessesRemaining > 0)) {
    wins++;
    guessesRemaining =9;
    lettersGuessed.length=0;
    computerGuess.length=0;
    var techGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];
    computerGuess.push(techGuess);
    alert ("Awesome, you got it!");
    console.log (computerGuess[0]);
}

else if ((userGuess !== computerGuess[0] && guessesRemaining > 0 )) {
    guessesRemaining = guessesRemaining-1;
}

else {
    losses++ 
    guessesRemaining =9;
    lettersGuessed.length=0;
    computerGuess.length =0;
    var techGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];
    computerGuess.push(techGuess);
    console.log (computerGuess[0]);
}

var html = "<h1>The Pyschic Game</h1>" +
           "<h4>Can you guess what letter I'm thinking of?</h4>" +
           "<p>Wins: " + wins + "</p>" +
           "<p>Losses: " + losses + "</p>" +
           "<p>Guesses Remaining: " + guessesRemaining + "</p>" +
           "<p>Your guesses so far: " + lettersGuessed + "</p>";
 
           document.querySelector("#game").innerHTML = html;
}

