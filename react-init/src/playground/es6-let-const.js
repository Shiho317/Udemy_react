console.log("hello js");

var nameVar = 'Andrew';
console.log('nameVar', nameVar);

let nameLet = 'Jar';
nameLet = 'Janis';
console.log(nameLet);

const nameConst = 'Frank';
console.log(nameConst);

//block scoping

var fullName = 'Jen Mead';
let firstName;

if(fullName){
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);