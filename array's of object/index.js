
const fruits = [{name: "apple", color:"red", calories: 95},
                {name: "orange", color:"yellow", calories: 78},
                {name: "jackfruit", color:"pill", calories: 78},
                {name: "pineapple", color:"green", calories: 85},
                {name: "cucumber", color:"white", calories: 25}]



const maxFruit = fruits.reduce( (max, fruit) =>
                                fruit.calories > max.calories ?
                                fruit : max);

const minFruit = fruits.reduce( (min, fruit) =>
                                fruit.calories < min.calories ?
                                fruit : min);

console.log(maxFruit);
console.log(minFruit);