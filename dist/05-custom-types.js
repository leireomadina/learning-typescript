// ****** Enums **********
// Use enums when we need to enumerate all possible values a variable can have
var ironMaidenInstruments;
(function (ironMaidenInstruments) {
    ironMaidenInstruments[ironMaidenInstruments["Guitar"] = 2] = "Guitar";
    ironMaidenInstruments[ironMaidenInstruments["Drums"] = 1] = "Drums";
    ironMaidenInstruments[ironMaidenInstruments["Bass"] = 1] = "Bass";
    ironMaidenInstruments[ironMaidenInstruments["Vocalist"] = 1] = "Vocalist";
})(ironMaidenInstruments || (ironMaidenInstruments = {}));
var ironMaidenMember;
(function (ironMaidenMember) {
    ironMaidenMember["Dave"] = "DAVE";
    ironMaidenMember["Janick"] = "JANICK";
    ironMaidenMember["Nicko"] = "NICKO";
    ironMaidenMember["Steve"] = "STEVE";
    ironMaidenMember["Bruce"] = "BRUCE";
})(ironMaidenMember || (ironMaidenMember = {}));
let ironMaiden = [
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
const ironMaidenVocalist = ironMaidenMember.Bruce;
console.log(`I love listening to ${ironMaidenVocalist}'s voice.`);
let lolWins = 234;
let lolLosses = lolWins; // valid
console.log(lolLosses); // 234
let lolTeam = {
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
let startingPoint = [25.2, 40, "N", 67.2, 12, "E"];
let destination = [3.6, 51, "S", 5.7, 10, "W"];
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function printMatch(callback) {
    let multiplyValues = callback(2, 5);
    let divideValues = callback(10, 2);
    console.log(`Let's ${callback.name} 2 and 5: the result is ${multiplyValues}`);
    console.log(`Let's ${callback.name} 10 and 2: the result is ${divideValues}`);
}
console.log(printMatch(multiply));
console.log(printMatch(divide));
// ****** Generic types **********
