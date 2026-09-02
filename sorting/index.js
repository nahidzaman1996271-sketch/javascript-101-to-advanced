
const people = [{name: "Spongebob", age:30, gpa:3.0},
                {name: "Patrick", age:37, gpa:3.7},
                {name: "Squidward", age:57, gpa:3.78},
                {name: "Sandy", age:27, gpa:4.0}]

people.sort((a, b) => a.name - b.name);

console.log(people);