// ****** Objects **********

let streamersInAndorra: {
  name: string;
  age: number;
  nationality?: string, // optional
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

// streamersInAndorra.followers = 34555; // error

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

// ****** Interfaces **********
interface Developer {
  name: string,
  age?: number, // optional
  stack: string[],
  remote: boolean,
}

const frontender: Developer = {
  name: "Risingdana",
  stack: ["JavaScript ES6", "React", "SASS", "HTML5"],
  remote: true
};

frontender.age = 20;
console.table(frontender);


// ****** Desestructuring objects **********
interface Computer {
  cpu: string,
  windows: number,
  ram: number,
  gpu: GpuDetails
}

interface GpuDetails {
  integrated: boolean,
  brand: string
}

const myComputer: Computer = {
  cpu: "Intel Core i7",
  windows: 10,
  ram: 16,
  gpu: {
    integrated: false,
    brand: "Nvidia",
  }
}

const {cpu, windows, ram, gpu} = myComputer; // desestructuring
const {integrated, brand} = gpu;
//can also be done in one line like this:
// const {cpu, windows, ram, gpu: { integrated, brand}} = myComputer;

console.log(`The CPU model is ${cpu}.`);
console.log(`The operative system is Windows ${windows}.`);
console.log(`The RAM component has ${ram} GB.`)
console.log(`The GPU is a ${brand} model.`)
