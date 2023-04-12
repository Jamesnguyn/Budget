// const person = {
//   name: 'James',
//   age: '25',
//   lcoation: {
//     city: 'SD',
//     temp: 54
//   }
// };

// const { name = 'anony', age } = person;
// const { city, temp } = person.lcoation;

// console.log(`${name} is ${age} he lives in ${city} and it is ${temp} degrees`);

// const book = {
//   title: 'ABC',
//   author: 'JRR Tolkien',
//   publisher: {
//     name: 'LOTR',
//   }
// };

// const { name: publisherName = 'self-published' } = book.publisher;

// console.log(publisherName);

//ARRAY DESTRUCTURING

const address = ['1234 Street Street', 'San Diego', 'California', '92126'];

const [street, city, state, zip] = address;

console.log(` you are in ${city} ${state}`);

const item = ['coffee (hot)', ' $2', '$2.5', '$2.75'];
const [coffee, small, medium, large] = item;

console.log(`a medium ${coffee} costs ${medium}`);