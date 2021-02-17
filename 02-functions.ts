// ****** Parameter Type Annotations + Optional parameters ******

function sayHello(name: string, surname?) {
  // surname: any type and optional parameter, not working on strict mode
  console.log(`Hello, ${name} ${surname || "Doe"}`);
}
sayHello("Turanga", 123); // Hello, Turanga 123
// sayHello(123, 321); // throws error
sayHello("Turanga"); // no error, surname is optional cause of the "?"
// sayHello(); // throws error: no arguments

const greetSomeone = (name: string): void => {
  console.log(`Hello, ${name}.`);
};
greetSomeone("Dave");

// ****** Default parameters ******
function sayGoodbye(name = "Fry") {
  // infers string or undefined values: cleaner than optional parameters
  console.log(`Goodbye, ${name}.`);
}
sayGoodbye("Bender"); // Goodbye, Bender.
sayGoodbye(); // Goodbye, Fry
// sayGoodbye(123); // throws error

// ****** Parameters order ******
function welcomePeople(
  name1: string,
  name2?: string,
  name3: string = ""
): void {
  console.log(`Welcome, ${name1}, ${name2}, ${name3}`);
}
welcomePeople("Dana"); // Welcome, Dana, undefined,
welcomePeople("Dana", "Zeit"); // Welcome, Dana, Zeit,

// ****** Return Types: implicit and explicit ******
function countCats(numCats: number) {
  return `There are ${numCats} cats at her house.`; //inferring return type: string
}
// let numberOfCats: number = countCats(3); // throws error: infers a string return value
let numberOfCats: string = countCats(3); // There are 3 cats at her house.
console.log(numberOfCats);

function countDogs(numDogs: number): string {
  // explicit value: must return a string
  // return 34; // throws error
  return `There are ${numDogs} dogs at her house.`;
}

// ****** Void return type ******
function sayHi(name: string): void {
  // no return: void type
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
function multiplyNumbers(a: number, b: number): number {
  //hover on parameters to get the description
  return a * b;
}
console.log(multiplyNumbers(2, 3));

// ****** Objects as arguments ******
interface LoLCharacter {
  name: string;
  hp: number;
  showHp: () => void; // defines a method
}

function healCharacter(character: LoLCharacter, heal: number): void {
  // character.hp += heal; // error: property doesn't exist
  character.hp += heal;
}

const newCharacter: LoLCharacter = {
  name: "Graves",
  hp: 450,
  showHp() {
    console.log("Health points", this.hp);
  },
};

healCharacter(newCharacter, 50);
newCharacter.showHp(); // Health points 500

// ****** Objects as arguments: exercise ******
interface superHero {
  name: string;
  age: number;
  // address: { // anidated objects not recommended here
  //   street: string,
  //   country: string,
  //   city: string
  // },
  address: Address; // refers to another interface
  showAddress: () => string;
}

interface Address {
  street: string;
  country: string;
  city: string;
}

const superHero: superHero = {
  name: "Spiderman",
  age: 30,
  address: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },
  showAddress() {
    return this.name + ", " + this.address.city + ", " + this.address.country;
  },
};

const address = superHero.showAddress();
console.log(address); // Spiderman, NY, USA
