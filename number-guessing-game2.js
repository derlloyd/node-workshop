// Generate a random number between 1 and 100. 
// Using the browser functions prompt and alert, 
// ask the user to guess the number. 
// You should give them 4 tries to guess the number. 
// If they guess wrong, tell them if it's higher or lower. 
// If they guess right, congratulate them. 
// Otherwise, give them a message saying what the correct number was, 
// as well as their list of guesses.

var randomNumber = Math.ceil(Math.random() * 100);
console.log("****" + randomNumber + "******");
var numGuesses = 0;
var maxGuesses = 4;
var guesses = [];

console.log("You've got " + maxGuesses +
    " chances to guess a random number between 1 and 100, good luck.");

var prompt = require('prompt');
prompt.start();

guessNumber();

function guessNumber() {

    prompt.get(["guess"], function(err, result) {

        var userNumber = Number(result.guess);
        guesses.push(userNumber);

        if (userNumber === randomNumber) {
            console.log("you win!!!!!!!!!!!!!!!");
            return;
        }
        else {
            numGuesses += 1;
            if (numGuesses >= maxGuesses) {
                console.log("you lose");
                console.log("your guesses were " + guesses + " and the number was " + randomNumber);
                return;
            }
            else {
                if (userNumber >= randomNumber) {
                    console.log("too high");
                }
                else {
                    console.log("too low");
                };
                guessNumber();
                return;

            }

        }
    })
}















// guesses.forEach(function(element, index) {
//     // prompt.get(["guess"], function(err, result) {
//         // var guessTry = 
//         prompt.get(["guess"], function(err, result) {
//             element = result;
//             console.log(result);
//             prompt.get(["guess2"], function(err, result) {
//                 element = result;
//                 console.log(guesses)
//             })  
//         })
//         // var guessTry = prompt("guess:");
//         //guesses[index] = guessTry; 
//         // console.log(guesses[index] + "    ----    " + index + "    ----    " + "guessTry");
//     })

// // })

// console.log(guesses);



// prompt.get(["first guess"], function(err, result) {

//     var guess1 = Number(result["first guess"]);

//     if (guess1 === randomNumber) {
//         return console.log("WOW!! Amazing guess! The number is " + randomNumber);
//     }
//     else if (guess1 > randomNumber) {
//         console.log("Too high!");
//     }
//     else {
//         console.log("Too low!");
//     }