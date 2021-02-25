// ******* Classes: scope and constructor *******
class ActorScopeExample {
}
/*
class normalPerson {
  name: string;
  address: string;
  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}
*/
// We can shorten the code above using only the constructor + public scope:
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
// ******* Inheritance: extends *******
class Actor extends Person {
    constructor(bestCharacter, age, gender) {
        super("Tony Leung", "Hong Kong");
        this.bestCharacter = bestCharacter;
        this.age = age;
        this.gender = gender;
    }
}
const tonyLeung = new Actor("Mr. Chow", 58, "male");
console.log(tonyLeung);
/* Actor {
  name: 'Tony Leung',
  address: 'Hong Kong',
  bestCharacter: 'Mr. Chow',
  age: 58,
  gender: 'male'
}
*/
