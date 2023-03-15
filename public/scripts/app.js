'use strict';

var square = function square(x) {
  return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//   return x * x;
// };

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(8));

//Challenge
var getFirstName = function getFirstName(x) {
  return x.split(' ')[0];
};

var getFirstName2 = function getFirstName2(x) {
  return x.split(' ')[0];
};

console.log(getFirstName('James Nguyen'));
console.log(getFirstName2('James Nguyen'));
