// Generate a random number between 1 and 100. 
// Using the browser functions prompt and alert, 
// ask the user to guess the number. 
// You should give them 4 tries to guess the number. 
// If they guess wrong, tell them if it's higher or lower. 
// If they guess right, congratulate them. 
// Otherwise, give them a message saying what the correct number was, 
// as well as their list of guesses.
                    
var randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
console.log("You've got 4 chances to guess a random number between 1 and 100, good luck.");

var guesses = [0, 0, 0, 0];

var prompt = require('prompt');
prompt.start();

guesses.forEach(function(element, index) {
    // prompt.get(["guess"], function(err, result) {
        // var guessTry = 
        prompt.get(["guess"], function(err, result) {
            element = result;
            console.log(result);
            prompt.get(["guess2"], function(err, result) {
                element = result;
                console.log(guesses)
            })  
        })
        // var guessTry = prompt("guess:");
        //guesses[index] = guessTry; 
        // console.log(guesses[index] + "    ----    " + index + "    ----    " + "guessTry");
    })
    
// })

console.log(guesses);



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