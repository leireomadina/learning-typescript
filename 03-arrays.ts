// ****** Array Type Inference **********
let myFavShows: string[] = ["The X-Files", "Futurama", "Black Sails"];
let myFavShows2: Array<string> = ["The X-Files", "Futurama", "Black Sails"]; // another syntax
myFavShows.push("Rome");
console.log(myFavShows); // ["The X-Files", "Futurama", "Black Sails", "Rome"]
// myFavShows.push(4); // throws error
let randomArr = ["Hey", 23, "Bye"]; // infers string or number type, same as:
let randomArr2: (string | number)[] = ["Hey", 23, "Bye"]; 
// randomArr.push(true); // error

// ****** Multi-dimensional arrays **********
let myTeam: string[][] = [["Teodosic", "Raül López"], ["Mumbrú", "Todorovic"]];
let mpvCandidates: string[] = []; // no problem
mpvCandidates.push("Teodosic");
console.log(mpvCandidates); // Teodosic

// ****** Tuples **********
// tuple: an array typed with elements of specific types (more restrictive)
let needToBuy: [string, [string, number], [string, boolean]] = ["potatoes", ["eggs", 3], ["basket", true]];
// let stuff: [string, number, number] = ["table", 45, false]; // throws error
let randomArray = ["hi", "bye"];
// needToBuy = randomArray; // error: can't assign an array to a tuple


// ****** Array Type Inference **********
let tupleOfNumbers: [number, number, number] = [56, 3, 0];
// tupleOfNumbers[3] = 12; // throws error
let arrayOfNumbers: number[] = [6, 43, 9];
arrayOfNumbers[3] = 2; // infers a number
console.log(arrayOfNumbers); // [6, 43, 9, 2]
let concatArray = arrayOfNumbers.concat(345, 5); 
console.log(concatArray); // [6, 43, 9, 3, 345, 5]
//converting a tuple into an array:
let nameTuple: [string, string] = ["Perkz", "Vulcan"];
let nameArray = nameTuple.concat("");
nameArray.pop();
nameArray.push("Reignover");
console.log(nameArray); //["Perkz", "Vulcan", "Reignover"]

// ****** Rest parameters **********
function addWords(mainPlayer: string, ...otherPlayers: string[]): string {
  let output = mainPlayer;
  for(let i = 0; i < otherPlayers.length; i++) {
    output = output.concat(otherPlayers[i]);
  }
  return output;
}
console.log(addWords("Closer", "Huhi", "Damonte", "FBI", "Ssumday")); // CloserHuhiDamonteFBISsumday
// addWords("Closer", 9)); // throws error

// ****** Spread syntax **********
function lolBestPlays(player: string, minute: number, useIgnite: boolean):void {
  console.log(`${player} got a kill at minute ${minute}.`);
  if (useIgnite) {
    console.log(`${player} used ignite.`);
  }
};
console.log(lolBestPlays("Perkz", 23, true)); //Perkz got a kill at minute 23. He used ignite.
let C9BestPlays: [string, number, boolean][] = [
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

// ****** Desestructuring arrays **********
const xFilesCharacters: string[] = ["Dana Scully", "Fox Mulder", "Walter Skinner", "Cigarette Smoking Man"];
const [p1, , , p4] = xFilesCharacters; // desestructuring 

console.log(`Character 1: ${p1}.`); // Character 1: Dana Scully.
console.log(`Character 2: ${xFilesCharacters[1]}.`);
console.log(`Character 3: ${xFilesCharacters[2]}.`);
console.log(`Character 4: ${p4}.`); // Character 4: Cigarette Smoking Man.

