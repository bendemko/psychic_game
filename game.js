// create the array of letters that the computer can chose from
var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
               "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//create global variables

var wins= 0;
var losses= 0;
var guessesLeft= 9;
var guessesSoFar= [];

//set variable to collect the user's guess
var userGuess= null;

//this has the computer randomly pick a letter from alphabet
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + 
			" Guesses so far: " + guessesSoFar + " Computer picked: " + computerChoice);

document.onkeyup= function(event){

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Add the user's guess to guessesSoFar array
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		guessesLeft--;
	}



    // if computerChoice is same as userGuess then record it as a win and then reset guessesLeft to 9, 
    // and empty the guessesSoFar array and have the computer make a new random pick
	if (computerChoice == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + 
		guessesSoFar + " Computer picked: " + computerChoice);
	}

	// if guessesLeft equals 0, record a loss and then reset guessesLeft to 9, and empty the guessesSoFar array
	// also have the computer make a new random pick
	if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + 
		guessesSoFar + " Computer picked: " + computerChoice);
}
		// Displaying progress to HTML
	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;

}