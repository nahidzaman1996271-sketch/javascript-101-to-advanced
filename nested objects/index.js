// nested objects = Objects inside of other objects
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;

    }
}

const person1 = new Person("Nahid",30,
                            "124 coc streest",
                            "Bikini Bottom",
                            "Int Bottom");

const person2 = new Person("IBn",
                            45,
                            "124 coc streest",
                            "Bikini Bottom",
                            "Int Bottom");

const person3 = new Person("Symoon",
                            30,"124 coc streest",
                            "Bikini Bottom",
                            "Int Bottom");

console.log(person1.address);