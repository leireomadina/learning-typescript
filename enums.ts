// ****** Custom types **********
// Use enums when we need to enumerate all possible values a variable can have
enum ironMaidenInstruments { // number type
  Guitar = 2,
  Drums = 1,
  Bass = 1,
  Vocalist = 1
}

enum ironMaidenMember { // string type
  Dave = "DAVE",
  Janick = "JANICK",
  Nicko = "NICKO",
  Steve = "STEVE",
  Bruce = "BRUCE"
}

let ironMaiden: [ironMaidenMember,number][] = [
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


