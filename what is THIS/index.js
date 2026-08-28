// this = reference to the object there THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name: "Mahmuda Khanum",
    food: "everything included bf's head",
    sayHello: function(){console.log(`Hi i am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.food}`)}
}

person1.sayHello();
person1.eat();

console.log(this);