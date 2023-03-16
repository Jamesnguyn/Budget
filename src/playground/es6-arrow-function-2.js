const add =  (a,b) => a + b;

console.log(add(100,100));

const user = {
  name: "james",
  cities: ['SD', 'NV', 'NY'],
  printPlacesLived() {
    return this.cities.map( (city) => this.name + ' has lived in ' + city )
  },
};

console.log(user.printPlacesLived());

//challenge

const multiplier = {
  numbers: [5, 10, 15],
  multiplyBy: 5,
  multiply(){
    return this.numbers.map( (x) => x * this.multiplyBy );
  },
};

console.log(multiplier.multiply());