// Generate a random number between 1 and 100. 
// Using the browser functions prompt and alert, 
// ask the user to guess the number. 
// You should give them 4 tries to guess the number. 
// If they guess wrong, tell them if it's higher or lower. 
// If they guess right, congratulate them. 
// Otherwise, give them a message saying what the correct number was, 
// as well as their list of guesses.

var randomNumber = Math.ceil(Math.random() * 100);

console.log("You've got 4 chances to guess a random number between 1 and 100, good luck.");
var prompt = require('prompt');

prompt.start();

prompt.get(["first guess"], function(err, result) {
    
    var guess1 = Number(result["first guess"]);

    if (guess1 === randomNumber) {
        return console.log("WOW!! Amazing guess! The number is " + randomNumber);
    }
    else if (guess1 > randomNumber) {
        console.log("Too high!");
    }
    else {
        console.log("Too low!");
    }

    prompt.get(["second guess"], function(err, result) {

        var guess2 = Number(result["second guess"]);

        if (guess2 === randomNumber) {
            return console.log("Great guess! The number is " + randomNumber);
        }
        else if (guess2 > randomNumber) {
            console.log("Too high!");
        }
        else {
            console.log("Too low!");
        }

        prompt.get(["third guess"], function(err, result) {

            var guess3 = Number(result["third guess"]);

            if (guess3 === randomNumber) {
                return console.log("Good guess! The number is " + randomNumber);
            }
            else if (guess3 > randomNumber) {
                console.log("Too high!");
            }
            else {
                console.log("Too low!");
            }

            prompt.get(["fourth guess"], function(err, result) {

                var guess4 = Number(result["fourth guess"]);
                if (guess4 === randomNumber) {
                    return console.log("Whew! you got it! The number is " + randomNumber);
                }
                else {
                    console.log("You lose! You guessed " + guess1 + ", " + guess2 +
                        ", " + guess3 + ", " + guess4 + " but the number was " + randomNumber + ".");
                }

            })

        })


    })

})
