import subtruct, { square, add } from './utils.js';

console.log('app.js is running');
console.log(square(4));
console.log(add(100, 23));
console.log(subtruct(100, 81));

import isSenior,{ isAdult, canDrink } from './person.js';

console.log(isAdult(18));
console.log(canDrink(18));
console.log(isSenior(64));

//install -> import -> use
import validator from 'validator';

console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JSX from webpack</p>
ReactDOM.render(template, document.getElementById('app'));