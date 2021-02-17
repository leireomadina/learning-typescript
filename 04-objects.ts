// ****** Objects **********

let streamersInAndorra: {
  name: string;
  age: number;
  games: { name: string; isToxic: boolean };
}[] = [
  {
    name: "Rubius",
    age: 30,
    // age: "boomer" // throws error
    // game: "Pokemon" // throws error
    games: {
      name: "Pokemon",
      isToxic: false,
    },
  },
  {
    name: "El Millor",
    age: 27,
    games: {
      name: "LoL",
      isToxic: true,
    },
  },
];

function introduceStreamers(personObject: {
  name: string;
  age: number;
  games: { name: string; isToxic: boolean };
}): void {
  let output = "";
  output += `${personObject.name} has ${personObject.age} years old and lives in Andorra while playing ${personObject.games.name}. `;
  if (personObject.games.isToxic) {
    output += `Btw he is pretty toxic.`;
  }
 console.log(output);
}

console.log(streamersInAndorra.forEach(introduceStreamers));