// ******* Type Inferences *******
const myName: string = "Leire";
let myCats: number = 0;
// myCats = "Rengar"; // throws error: can't reassign a variable to a value of a different type
const areUnicornReal: boolean = false;
let sentence: string = `My name is ${myName} and I have ${myCats} cats.`;

let random; // any type
random = "whatever!";
random = "99"; // no error
let randomWord: string;
// randomWord = 312; // throws error
let randomNumber: number;

// ******* Type shapes concept *******
const myNameCapitals: string = myName.toUpperCase();
console.log(myNameCapitals); // LEIRE
// const myCatsCapitals: number = myCats.toUpperCase(); // throws error: can't use an string method in a number type variable
const myNameLength: number = myName.length;
console.log(myNameLength); // 5

