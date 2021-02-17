"use strict";
// ****** Parameter Type Annotations + Optional parameters ******
// function sayHello(name: string, surname?) {
//   // surname: any type and optional parameter, not working on strict mode
//   console.log(`Hello, ${name} ${surname || "Doe"}`);
// }
// sayHello("Turanga", 123); // Hello, Turanga 123
// sayHello(123, 321); // throws error
// sayHello("Turanga"); // no error, surname is optional cause of the "?"
// sayHello(); // throws error: no arguments
// ****** Default parameters ******
function sayGoodbye(name = "Fry") {
    // infers string or undefined values: cleaner than optional parameters
    console.log(`Goodbye, ${name}.`);
}
sayGoodbye("Bender"); // Goodbye, Bender.
sayGoodbye(); // Goodbye, Fry
// sayGoodbye(123); // throws error
// ****** Return Types: implicit and explicit ******
function countCats(numCats) {
    return `There are ${numCats} cats at her house.`; //inferring return type: string
}
// let numberOfCats: number = countCats(3); // throws error: infers a string return value
let numberOfCats = countCats(3); // There are 3 cats at her house.
console.log(numberOfCats);
function countDogs(numDogs) {
    // explicit value: must return a string
    // return 34; // throws error
    return `There are ${numDogs} dogs at her house.`;
}
// ****** Void return type ******
function sayHi(name) {
    console.log(`Hello, ${name}`);
}
sayHi("Dr. Cho");
// ****** How to document functions ******
/**
   * Returns the multiplication of two numbers.
   *
   * @param a - The first input number
   * @param b - The second input number
   * @returns The multiplication of `a` and `b`
   *
*/
function multiplyNumbers(a, b) {
    return a * b;
}
console.log(multiplyNumbers(2, 3));
