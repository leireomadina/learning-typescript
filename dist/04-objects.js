// ****** Objects **********
let streamersInAndorra = [
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
function introduceStreamers(personObject) {
    let output = "";
    output += `${personObject.name} has ${personObject.age} years old and lives in Andorra while playing ${personObject.games.name}. `;
    if (personObject.games.isToxic) {
        output += `Btw he is pretty toxic.`;
    }
    console.log(output);
}
console.log(streamersInAndorra.forEach(introduceStreamers));
const frontender = {
    name: "Risingdana",
    stack: ["JavaScript ES6", "React", "SASS", "HTML5"],
    remote: true
};
frontender.age = 20;
console.table(frontender);
const myComputer = {
    cpu: "Intel Core i7",
    windows: 10,
    ram: 16,
    gpu: {
        integrated: false,
        brand: "Nvidia",
    }
};
const { cpu, windows, ram, gpu } = myComputer; // desestructuring
const { integrated, brand } = gpu;
console.log(`The CPU model is ${cpu}.`);
console.log(`The operative system is Windows ${windows}.`);
console.log(`The RAM component has ${ram} GB.`);
console.log(`The GPU is a ${brand} model.`);
