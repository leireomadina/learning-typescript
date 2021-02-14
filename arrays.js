// ****** Array Type Inference **********
var myFavShows = ["The X-Files", "Futurama", "Black Sails"];
var myFavShows2 = ["The X-Files", "Futurama", "Black Sails"]; // another syntax
myFavShows.push("Rome");
console.log(myFavShows); // ["The X-Files", "Futurama", "Black Sails", "Rome"]
// myFavShows.push(4); // throws error
// ****** Multi-dimensional arrays **********
var myTeam = [["Teodosic", "Raül López"], ["Mumbrú", "Todorovic"]];
var mpvCandidates = []; // no problem
mpvCandidates.push("Teodosic");
console.log(mpvCandidates); // Teodosic
// ****** Tuples **********
// tuple: an array typed with elements of specific types (more restrictive)
var needToBuy = ["potatoes", ["eggs", 3], ["basket", true]];
// let stuff: [string, number, number] = ["table", 45, false]; // throws error
var randomArray = ["hi", "bye"];
// needToBuy = randomArray; // error: can't assign an array to a tuple
// ****** Array Type Inference **********
var tupleOfNumbers = [56, 3, 0];
// tupleOfNumbers[3] = 12; // throws error
var arrayOfNumbers = [6, 43, 9];
arrayOfNumbers[3] = 2; // infers a number
console.log(arrayOfNumbers); // [6, 43, 9, 2]
var concatArray = arrayOfNumbers.concat(345, 5);
console.log(concatArray); // [6, 43, 9, 3, 345, 5]
//converting a tuple into an array:
var nameTuple = ["Perkz", "Vulcan"];
var nameArray = nameTuple.concat("");
nameArray.pop();
nameArray.push("Reignover");
console.log(nameArray); //["Perkz", "Vulcan", "Reignover"]
// ****** Rest parameters **********
function addWords(mainPlayer) {
    var otherPlayers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherPlayers[_i - 1] = arguments[_i];
    }
    var output = mainPlayer;
    for (var i = 0; i < otherPlayers.length; i++) {
        output = output.concat(otherPlayers[i]);
    }
    return output;
}
console.log(addWords("Closer", "Huhi", "Damonte", "FBI", "Ssumday")); // CloserHuhiDamonteFBISsumday
// addWords("Closer", 9)); // throws error
// ****** Spread syntax **********
function lolBestPlays(player, minute, useIgnite) {
    console.log(player + " got a kill at minute " + minute + ".");
    if (useIgnite) {
        console.log(player + " used ignite.");
    }
}
;
console.log(lolBestPlays("Perkz", 23, true)); //Perkz got a kill at minute 23. He used ignite.
var C9BestPlays = [
    ["Zven", 6, false],
    ["Vulcan", 32, true],
    ["Blaber", 3, false],
    ["Fudge", 12, false],
    ["Perkz", 29, true],
];
// let's loop over the array to execute the function above
console.log(C9BestPlays.forEach(function (play) { return lolBestPlays.apply(void 0, play); }));
/*
Zven got a kill at minute 6.
Vulcan got a kill at minute 32.
Vulcan used ignite.
Blaber got a kill at minute 3.
Fudge got a kill at minute 12.
Perkz got a kill at minute 29.
Perkz used ignite.
*/
