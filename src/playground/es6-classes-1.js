class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi ${this.name}!`;
  }

  getDescription() {
    return `${ this.name } is ${ this.age } year(s) old.`;
  }
}

const me = new Person('James Nguyen', 25);

console.log(me.getGreeting());
console.log(me.getDescription());