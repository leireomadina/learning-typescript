// ******* Type Inferences *******
const myName = "Leire";
let myCats = 0;
// myCats = "Rengar"; // throws error: can't reassign a variable to a value of a different type
const areUnicornReal = false;
let sentence = `My name is ${myName} and I have ${myCats} cats.`;
let card = "Q"; // two possible types with OR operator
card = 4;
let random; // any type
random = "whatever!";
random = "99"; // no error
let randomWord;
// randomWord = 312; // throws error
let randomNumber;
// ******* Type shapes concept *******
const myNameCapitals = myName.toUpperCase();
console.log(myNameCapitals); // LEIRE
// const myCatsCapitals: number = myCats.toUpperCase(); // throws error: can't use an string method in a number type variable
const myNameLength = myName.length;
console.log(myNameLength); // 5
