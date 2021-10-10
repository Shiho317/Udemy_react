console.log('hello js');

const square = function(x){
  return x * x;
}

const squareArrow = x => x * x;

console.log(square(8));
console.log(squareArrow(8));

// const getFirstName = function(name){
//   return name.split(' ')[0];
// }

const getFirstName = name => name.split(' ')[0];

console.log(getFirstName('Mike Smith'));

const multiplyer = {
  number: [1, 2, 3],
  multiplyBy: 2,
  multiply(){
    return this.number.map(result => result * this.multiplyBy);
  }
};
console.log(multiplyer.multiply());
