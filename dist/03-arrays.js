// ****** Array Type Inference **********
let myFavShows = ["The X-Files", "Futurama", "Black Sails"];
let myFavShows2 = ["The X-Files", "Futurama", "Black Sails"]; // another syntax
myFavShows.push("Rome");
console.log(myFavShows); // ["The X-Files", "Futurama", "Black Sails", "Rome"]
// myFavShows.push(4); // throws error
let randomArr = ["Hey", 23, "Bye"]; // infers string or number type, same as:
let randomArr2 = ["Hey", 23, "Bye"];
// randomArr.push(true); // error
// ****** Multi-dimensional arrays **********
let myTeam = [["Teodosic", "Raül López"], ["Mumbrú", "Todorovic"]];
let mpvCandidates = []; // no problem
mpvCandidates.push("Teodosic");
console.log(mpvCandidates); // Teodosic
// ****** Tuples **********
// tuple: an array typed with elements of specific types (more restrictive)
let needToBuy = ["potatoes", ["eggs", 3], ["basket", true]];
// let stuff: [string, number, number] = ["table", 45, false]; // throws error
let randomArray = ["hi", "bye"];
// needToBuy = randomArray; // error: can't assign an array to a tuple
// ****** Array Type Inference **********
let tupleOfNumbers = [56, 3, 0];
// tupleOfNumbers[3] = 12; // throws error
let arrayOfNumbers = [6, 43, 9];
arrayOfNumbers[3] = 2; // infers a number
console.log(arrayOfNumbers); // [6, 43, 9, 2]
let concatArray = arrayOfNumbers.concat(345, 5);
console.log(concatArray); // [6, 43, 9, 3, 345, 5]
//converting a tuple into an array:
let nameTuple = ["Perkz", "Vulcan"];
let nameArray = nameTuple.concat("");
nameArray.pop();
nameArray.push("Reignover");
console.log(nameArray); //["Perkz", "Vulcan", "Reignover"]
// ****** Rest parameters **********
function addWords(mainPlayer, ...otherPlayers) {
    let output = mainPlayer;
    for (let i = 0; i < otherPlayers.length; i++) {
        output = output.concat(otherPlayers[i]);
    }
    return output;
}
console.log(addWords("Closer", "Huhi", "Damonte", "FBI", "Ssumday")); // CloserHuhiDamonteFBISsumday
// addWords("Closer", 9)); // throws error
// ****** Spread syntax **********
function lolBestPlays(player, minute, useIgnite) {
    console.log(`${player} got a kill at minute ${minute}.`);
    if (useIgnite) {
        console.log(`${player} used ignite.`);
    }
}
;
console.log(lolBestPlays("Perkz", 23, true)); //Perkz got a kill at minute 23. He used ignite.
let C9BestPlays = [
    ["Zven", 6, false],
    ["Vulcan", 32, true],
    ["Blaber", 3, false],
    ["Fudge", 12, false],
    ["Perkz", 29, true],
];
// let's loop over the array to execute the function above
console.log(C9BestPlays.forEach(play => lolBestPlays(...play)));
/*
Zven got a kill at minute 6.
Vulcan got a kill at minute 32.
Vulcan used ignite.
Blaber got a kill at minute 3.
Fudge got a kill at minute 12.
Perkz got a kill at minute 29.
Perkz used ignite.
*/
