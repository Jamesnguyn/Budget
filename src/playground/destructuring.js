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

const book = {
  title: 'ABC',
  author: 'JRR Tolkien',
  publisher: {
    name: 'LOTR',
  }
};

const { name: publisherName = 'self-published' } = book.publisher;

console.log(publisherName);