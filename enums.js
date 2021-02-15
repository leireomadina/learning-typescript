// ****** Custom types **********
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
var ironMaiden = [
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
var ironMaidenVocalist = ironMaidenMember.Bruce;
console.log("I love listening to " + ironMaidenVocalist + "'s voice.");
// ironMaiden.push(musicBand.Jason, 70); // throws error
