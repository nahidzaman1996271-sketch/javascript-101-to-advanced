// array = a variable like structure that can hold more than 1 value

let fruit = ["apple","orange","banana","jackfruit"];

// fruit.pop();
// fruit.push("coconut");
// fruit.unshift("mango");
// fruit.shift();

// for(let i=0; i<fruit.length; i++){
//     console.log(fruit[i]);
// }

// we can also do this in reverse i mean the counting we just need to i = fruit.length

fruit.sort().reverse();

for(let fruits of fruit){ // this is a the shortcurt 
    console.log(fruits);
}