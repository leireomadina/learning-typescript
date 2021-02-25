// ****** Generics ******
function checkType<T>(arg: T): T {
  // type variable (T)
  console.log(typeof arg);
  return arg;
}

let randomString = checkType("Chips"); // type argument inference
let randomNumber2 = checkType<number>(23); // explicit declaration

/*
function checkLength<T>(arg: T):void {
  console.log(arg.length); // error: Property 'length' does not exist on type 'T
}
*/

const returnLast = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};
const lastNumber = returnLast([1, 2, 3]);
const lastWord = returnLast<string>(["Chocolate", "Ice cream", "Strawberries"]);
console.log(lastNumber); // 3
console.log(lastWord); // Strawberries

const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
  // returns a tuple
  return [x, y];
};

const example1 = makeArr(5, 6);
const example2 = makeArr("a", "b");
const example3 = makeArr<string | null>("a", 5);

// ****** Extends ******
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const herName = makeFullName({
  firstName: "Dana",
  lastName: "Scully",
  nickname: "Starbuck",
});
console.log(herName);

// ****** Types and Interfaces ******
interface Tab <T>{
  id: string;
  position: number;
  data: T;
}

type numberTab = Tab<number>; // same as:
// type numberTab = {
//   id: string;
//   position: number;
//   data: number;
// }
type stringTab = Tab<string>;
