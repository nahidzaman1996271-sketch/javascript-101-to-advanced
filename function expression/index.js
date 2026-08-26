// function declaration = define a resuable block of code that performs a specific task

// function hello(){
//     console.log("Hello!");
// }

// function expressions = a way to define functions as values or variables

const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function(element){
    return Math.pow(element,2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element,3);
});

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const total = numbers.reduce(function(accumalator,element){
    return accumalator + element;
});

console.log(evenNums);