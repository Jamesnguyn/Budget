const square = function ( x ) {
  return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//   return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(8));

//Challenge
const getFirstName = (x) => {
  return x.split(' ')[0];
};

const getFirstName2 = (x) => x.split(' ')[0];

console.log(getFirstName('James Nguyen'));
console.log(getFirstName2('James Nguyen'));