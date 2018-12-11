// game.js
// codyrush@gmail.com
// 2018-12-10

var crystals           = []; // set up an empty crystals array
var userNumberTotal    = 0; // initialize the users total to zero

// Computer min and max values
var minGameNumber      = 19;
var maxGameNumber      = 120;

// Crystal min and max values
var minCrystalNumber   = 1;
var maxCrystalNumber   = 12;

// get the computer random number
var gameNumber   = getRandomNumber(minGameNumber,maxGameNumber);
console.log("Computer: " + gameNumber);

// a function to get a random number between a minimum and maximum value
function getRandomNumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// a function to generate n number of crystals and get a random value for each
function generateCrystals(crystalCount) {
    for (i = 0 ; i < crystalCount ; i++) {
        crystals.push(getRandomNumber(minCrystalNumber,maxCrystalNumber));
        //console.log(i + ": " + crystals[i]);
    }
}

// check the users total against the computer value, if the total is 
// greater than the computer: game over, if it's equal: win!
function checkUserNumber(crystalTotalValue) {
    userNumberTotal += crystalTotalValue;

    if (userNumberTotal === gameNumber) {
        console.log("Winner!");
    } else if (userNumberTotal > gameNumber) {
        console.log("Game over.");
    } else {
        console.log("Still playing.");
    }

    console.log(userNumberTotal);
}

// generate the gameCrystals
generateCrystals(4);
console.log("Crystals: " + crystals);

$(document).ready(function(){
    $("#crystal-one-crystal").click(function() {
        console.log("Crystal one clicked:" + crystals[0]);
        userNumberTotal = userNumberTotal + crystals[0];
        console.log("User Number total:" + userNumberTotal);
        document.getElementById("user-number").textContent  = userNumberTotal;
    });
    
    $("#crystal-two-crystal").click(function() {
        console.log("Crystal two clicked:" + crystals[1]);
        userNumberTotal += crystals[1];
        console.log("User Number total:" + userNumberTotal);
        document.getElementById("user-number").textContent  = userNumberTotal;
    });
    
    $("#crystal-three-crystal").click(function() {
        console.log("Crystal three clicked:" + crystals[2]);
        userNumberTotal += crystals[2];
        console.log("User Number total:" + userNumberTotal);
        document.getElementById("user-number").textContent  = userNumberTotal;
    });
    
    $("#crystal-four-crystal").click(function() {
        console.log("Crystal four clicked:" + crystals[3]);
        userNumberTotal += crystals[3];
        console.log("User Number total:" + userNumberTotal);
        document.getElementById("user-number").textContent  = userNumberTotal;
    });
});

document.getElementById("user-number").textContent  = 0;
document.getElementById("random-number").textContent = gameNumber;
// document.getElementById("crystal-one-text").textContent   = crystals[0];
// document.getElementById("crystal-two-text").textContent   = crystals[1];
// document.getElementById("crystal-three-text").textContent = crystals[2];
// document.getElementById("crystal-four-text").textContent  = crystals[3];

document.getElementById("rule-one").textContent   = "The computer picks a random number between " + minGameNumber + " and " + maxGameNumber +". Click crystals to match the computer's number.";
document.getElementById("rule-two").textContent   = "Each crystal is worth a random value between " +minCrystalNumber+ " and " +maxCrystalNumber+". Click a crystal to add that value to your total score.";
document.getElementById("rule-three").textContent = "The values of the crystals are hidden until you click on the crystal and will update each time you play a new game.";
document.getElementById("rule-four").textContent  = "Win by adding up crystals to match the random computer number. Go over and you lose. Good luck!";