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

// ****** Desestructuring objects **********
