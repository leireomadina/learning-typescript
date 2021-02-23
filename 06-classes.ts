// ******* Classes: scope and constructor *******

class ActorScopeExample {
  public gender: string; // visible outside this class
  private age: number; // only visible inside this class
  static bestCharacter: string; // accesible without creating an instance
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
  constructor(public name: string, public address: string) {}
}

// ******* Inheritance: extends *******
class Actor extends Person {
  constructor(
    public bestCharacter: string,
    public age: number,
    public gender: string,

  ) {
    super("Tony Leung", "Hong Kong");
  }
}

const tonyLeung: Actor = new Actor("Mr. Chow", 58, "male");
console.log(tonyLeung); 
/* Actor {
  name: 'Tony Leung',
  address: 'Hong Kong',
  bestCharacter: 'Mr. Chow',
  age: 58,
  gender: 'male'
}
*/
