console.log('hello js');


class Person {
  constructor(name){
    this.name = name || 'test';
  }
  getGreeting(){
    return `Hi. I am ${this.name}`;
  }
}

const me = new Person('Andrew Mead');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());

class Persons {
  constructor(name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }
  getIntroduce(){
    return `${this.name} is ${this.age} years old.`
  }
}

const you = new Persons('Andrew Mead', 26);
console.log(you.getIntroduce());

const others = new Persons();
console.log(others.getIntroduce());