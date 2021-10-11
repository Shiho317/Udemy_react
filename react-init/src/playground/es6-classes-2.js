console.log('hello js');

class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi. I am ${this.name}.`;
  }

  getIntroduce(){
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getIntroduce(){
    let introduce = super.getIntroduce();

    if(this.hasMajor()){
      introduce += ` Their major is ${this.major}`;
    }
    return introduce;
  }
}

class Traveler extends Person {
  constructor(name, age, location){
    super(name, age);
    this.homelocation = location;
  }
  getGreeting(){
    let greeting = super.getGreeting();

    if(this.homelocation){
      greeting += ` I'm visiting from ${this.homelocation}.`;
    }
    return greeting;
  }
}

const you = new Traveler('Andrew Mead', 26, 'Philladelphia');
console.log(you.getGreeting());

const others = new Traveler();
console.log(others.getGreeting());

