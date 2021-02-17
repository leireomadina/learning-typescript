// ****** Enums **********
// Use enums when we need to enumerate all possible values a variable can have
enum ironMaidenInstruments { // number type
  Guitar = 2,
  Drums = 1,
  Bass = 1,
  Vocalist = 1,
}

enum ironMaidenMember { // string type
  Dave = "DAVE",
  Janick = "JANICK",
  Nicko = "NICKO",
  Steve = "STEVE",
  Bruce = "BRUCE",
}

let ironMaiden: [ironMaidenMember, number][] = [
  [ironMaidenMember.Dave, 67],
  [ironMaidenMember.Janick, 71],
  [ironMaidenMember.Nicko, 80],
  [ironMaidenMember.Steve, 54],
  [ironMaidenMember.Bruce, 66],
];
console.log(ironMaiden);
/*
[
  [ 'DAVE', 67 ],
  [ 'JANICK', 71 ],
  [ 'NICKO', 80 ],
  [ 'STEVE', 54 ],
  [ 'BRUCE', 66 ]
]
*/

const ironMaidenVocalist: ironMaidenMember = ironMaidenMember.Bruce;
console.log(`I love listening to ${ironMaidenVocalist}'s voice.`);
// ironMaiden.push(musicBand.Jason, 70); // throws error

// ****** Type aliases **********
// Type aliases = alternative custom type names
type MyNumber = number;
let lolWins: MyNumber = 234;
// lolWins = "123"; // error
type MyOtherNumber = number;
let lolLosses: MyOtherNumber = lolWins; // valid
console.log(lolLosses); // 234

type LolPlayer = { name: string; age: number; isBanned: boolean }; // Type aliases
let lolTeam: {
  name: string,
  wins: number;
  losses: number;
  toplaner: LolPlayer;
  jungler: LolPlayer;
  midlaner: LolPlayer;
  // etc.
} = {
  name: "C9",
  wins: 23,
  losses: 12,
  toplaner: {
    name: "Fudge",
    age: 18,
    isBanned: false,
  },
  jungler: {
    name: "Blaber",
    age: 21,
    isBanned: false,
  },
  midlaner: {
    name: "Perkz",
    age: 23,
    isBanned: false,
  },
};

type Coordinates = [number, number, string, number, number, string];
let startingPoint: Coordinates = [25.2, 40, "N", 67.2, 12, "E"];
let destination: Coordinates = [3.6, 51, "S", 5.7, 10, "W"];

// ****** Function types **********
type multiplyTwoNumbersFunction = (arg0: number, arg1: number) => number;
function multiply (num1: number, num2: number) {
  return num1 * num2;
}
function divide (num1: number, num2: number) {
  return num1 / num2;
}
function printMatch(callback: multiplyTwoNumbersFunction):void {
  let multiplyValues = callback(2, 5);
  let divideValues = callback(10, 2);
  console.log(`Let's ${callback.name} 2 and 5: the result is ${multiplyValues}`);
  console.log(`Let's ${callback.name} 10 and 2: the result is ${divideValues}`);
}

console.log(printMatch(multiply));
console.log(printMatch(divide));

// ****** Generic types **********