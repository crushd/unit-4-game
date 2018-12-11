// game.js
// codyrush@gmail.com
// 2018-12-10

var crystals           = [];  // set up an empty crystals array
var userNumberTotal    = 0;   // initialize the users total to zero
var userWins           = 0;   // initializes the users wins to zero
var userLosses         = 0;   // initializes the users losses to zero

// Computer min and max values
var minGameNumber      = 19;  // this is the minimum number the computer will choose
var maxGameNumber      = 120; // this is the maximum number the computer will choose

// Crystal min and max values
var minCrystalNumber   = 1;   // this is the minimum crystal value
var maxCrystalNumber   = 12;  // this is the maximum crystal value

// get the computer random number
var gameNumber   = getRandomNumber(minGameNumber,maxGameNumber);

document.getElementById("crystal-one-text").innerHTML       = "\u00A0";
document.getElementById("crystal-two-text").innerHTML       = "\u00A0";
document.getElementById("crystal-three-text").innerHTML     = "\u00A0";
document.getElementById("crystal-four-text").innerHTML      = "\u00A0";

// get a random number between a minimum and maximum value
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

// reset function to zero any game-specifics values.
function resetGame() {
    crystals = [];
    userNumberTotal = 0;
    gameNumber = getRandomNumber(minGameNumber,maxGameNumber);
    generateCrystals(4);
    document.getElementById("crystal-one-text").innerHTML       = "\u00A0";
    document.getElementById("crystal-two-text").innerHTML       = "\u00A0";
    document.getElementById("crystal-three-text").innerHTML     = "\u00A0";
    document.getElementById("crystal-four-text").innerHTML      = "\u00A0";

    document.getElementById("random-number").textContent  = gameNumber;
    document.getElementById("user-number").textContent  = 0;

    console.log("Crystals: " + crystals);
}

// check the users total against the computer value, if the total is 
// greater than the computer: game over, if it's equal: win!
function checkUserNumber(crystalTotalValue) {

    if (userNumberTotal === gameNumber) {
        //console.log("Winner!");
        userWins++;
        document.getElementById("user-wins").textContent  = "Wins: " + userWins;
        resetGame();

    } else if (userNumberTotal > gameNumber) {
        //console.log("Game over.");
        userLosses++;
        document.getElementById("user-losses").textContent  = "Losses: " + userLosses;
        resetGame();

    } else {
        //console.log("Still playing.");
    }

}

// generate the gameCrystals
generateCrystals(4);
console.log("Crystals: " + crystals);

$(document).ready(function(){
    $("#crystal-one-crystal").click(function() {
        //console.log("Crystal one clicked:" + crystals[0]);
        userNumberTotal += crystals[0];
        console.log("User Number total:" + userNumberTotal);
        document.getElementById("user-number").textContent        = userNumberTotal;
        document.getElementById("crystal-one-text").textContent   = crystals[0];
        checkUserNumber(userNumberTotal);
    });
    
    $("#crystal-two-crystal").click(function() {
        //console.log("Crystal two clicked:" + crystals[1]);
        userNumberTotal += crystals[1];
        console.log("User Number total:" + userNumberTotal);
        document.getElementById("user-number").textContent        = userNumberTotal;
        document.getElementById("crystal-two-text").textContent   = crystals[1];
        checkUserNumber(userNumberTotal);
    });
    
    $("#crystal-three-crystal").click(function() {
        //console.log("Crystal three clicked:" + crystals[2]);
        userNumberTotal += crystals[2];
        console.log("User Number total:" + userNumberTotal);
        document.getElementById("user-number").textContent        = userNumberTotal;
        document.getElementById("crystal-three-text").textContent = crystals[2];
        checkUserNumber(userNumberTotal);
    });
    
    $("#crystal-four-crystal").click(function() {
        //console.log("Crystal four clicked:" + crystals[3]);
        userNumberTotal += crystals[3];
        console.log("User Number total:" + userNumberTotal);
        document.getElementById("user-number").textContent        = userNumberTotal;
        document.getElementById("crystal-four-text").textContent  = crystals[3];
        checkUserNumber(userNumberTotal);
    });
});

// Set the computer and user value inits
document.getElementById("user-number").textContent  = 0;
document.getElementById("random-number").textContent = gameNumber;

// Rules cards
document.getElementById("rule-one").textContent   = "The computer picks a random number between " + minGameNumber + " and " + maxGameNumber +". Click crystals to match the computer's number.";
document.getElementById("rule-two").textContent   = "Each crystal is worth a random value between " +minCrystalNumber+ " and " +maxCrystalNumber+". Click a crystal to add that value to your total score.";
document.getElementById("rule-three").textContent = "The values of the crystals are hidden until you click on the crystal and will update each time you play a new game.";
document.getElementById("rule-four").textContent  = "Win by adding up crystals to match the random computer number. Go over and you lose. Good luck!";