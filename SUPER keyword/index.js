// super = keyword is used in classes to call.the constructor or
//          access the properties and methods of a parent (superclass)
//          this = this object
//          super = the parent

class Animal{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}
class Rabbit extends Animal{
    
    constructor(name, age, runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Hawk extends Animal{

    constructor(name, age, flyspeed){
        super(name,age);
        this.flyspeed = flyspeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flyspeed);
    }
}
class Fish extends Animal{

    constructor(name, age, swimspeed){
        super(name,age);
        this.swimspeed = swimspeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimspeed);
    }
}

const rabbit = new Rabbit("rabbit",1,24);
const fish = new Fish("fish",3,29);
const hawk = new Hawk("hawk",5,26);

hawk.fly();