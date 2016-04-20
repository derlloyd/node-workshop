// In this file, write a program that will let the user play hangman. The program should work as follows:
// Choose a random word from a list of words.
// In a loop, do the following:
// Ask the user to guess a letter
// If the user guessed a wrong letter, then add one step to the hangman "drawing"
// Display the current completion of the word next to a hangman ASCII "drawing". 
// You can get some inspiration from either here or here
// Keep looping until either the word is found or the hangman is hanged!
// Display a message to the user letting them know what happened


var randomWordList = ["skip", "house", "mine", "dog"];
var randomWord = randomWordList[Math.floor(Math.random() * randomWordList.length)];
var randomWordGuess = "*".repeat(randomWord.length);
var randomWordGuessArray = randomWordGuess.split("");
var hangman = 0;
console.log("Welcome to hangman, can you guess the word:");
console.log(randomWordGuessArray);

var prompt = require("prompt");
prompt.start();

guessLetter();

function guessLetter() {
    prompt.get(["letter"], function(err, result) {
        if (randomWord.indexOf(result['letter']) !== -1) {
            console.log("its there");
            randomWordGuessArray[randomWord.indexOf(result.letter)] = result.letter;
            console.log(randomWordGuessArray);

            if (randomWordGuessArray.join("") === randomWord) {
                console.log("game over, you win");
                return;
            }
            else {
                console.log("guess again");
                guessLetter();
                return;
            }
        }
        else {
            hangman += 1;
            console.log("hangman --->" + hangman);
            if (hangman === 8) {
                console.log("game over, you lose");
                return;
            }
            else {
                console.log("not here, try again");
                guessLetter();
                return;
            }
        }
    });
};
