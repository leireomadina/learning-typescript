// ****** Generics ******
function checkType(arg) {
    // type variable (T)
    console.log(typeof arg);
    return arg;
}
let randomString = checkType("Chips"); // type argument inference
let randomNumber2 = checkType(23); // explicit declaration
/*
function checkLength<T>(arg: T):void {
  console.log(arg.length); // error: Property 'length' does not exist on type 'T
}
*/
const returnLast = (arr) => {
    return arr[arr.length - 1];
};
const lastNumber = returnLast([1, 2, 3]);
const lastWord = returnLast(["Chocolate", "Ice cream", "Strawberries"]);
console.log(lastNumber); // 3
console.log(lastWord); // Strawberries
const makeArr = (x, y) => {
    // returns a tuple
    return [x, y];
};
const example1 = makeArr(5, 6);
const example2 = makeArr("a", "b");
const example3 = makeArr("a", 5);
// ****** Extends ******
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
const herName = makeFullName({
    firstName: "Dana",
    lastName: "Scully",
    nickname: "Starbuck",
});
console.log(herName);
// ****** Interfaces ******
