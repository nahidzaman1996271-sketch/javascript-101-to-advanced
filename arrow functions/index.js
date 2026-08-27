// arrow functions = a concise way to write function expressions good for simple functions that you only use once

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element,2));
const cubes = numbers.map((element) => Math.pow(element,3));
const evenNums = numbers.filter((element) => element %2 === 0);
const oddNums = numbers.filter((element) => element %2 !== 0);
const total = numbers.reduce((accumulator, element) >= accumulator + element);

console.log(cubes);
console.log(evenNums);
console.log(oddNums);