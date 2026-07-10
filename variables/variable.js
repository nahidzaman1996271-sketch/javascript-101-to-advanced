// variable = A container that stores a value
//            Behaves as if it were the value it contains

// 1. declaration    let x;
// 2. assignment     x = 100;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// let firstName = "Nahid";
// let favoriteFood = "Egg";
// let email = "nahidzaman1996271@gmail.com";

// console.log(typeof price);
// console.log(`You are ${age} years old`);
// console.log(`The price is: ${price}`);
// console.log(`Your gpa is: ${gpa}`);

// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`Your favorite food is ${favoriteFood}`);
// console.log(`Your email address is ${email}`);

// let online = true;
// let forsale = false;
// let isStudent = true;

// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forsale}`);
// console.log(`Enrolled: ${isStudent}`);

let fullName = "Nahid Ibn Zaman";
let age = 25;
let IsStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your age is ${age} years old`;
document.getElementById("p3").textContent = `You are a student: ${IsStudent}`;