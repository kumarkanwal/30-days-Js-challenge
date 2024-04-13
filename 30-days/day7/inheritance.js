// inheritance = allows a new class to inherit properties 
// methods  from a existing class (parent -> child)
// helps with code reusability

class Animal{
    alive = true;
    eat(){ console.log(`This ${this.name} is eating`);}
    sleep(){console.log(`This ${this.name} is sleeping`);}  
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish";
    swin(){
        console.log(`This ${this.name} is swiming`);
    }
}

class Hawk extends Animal{
    name = 'Hawk';
    fly(){
        console.log(`This ${this.name} is flying`);
    }
};

const rabbit = new Rabbit();
const fish = new Fish();
console.log(`The name of animal is ${rabbit.name}`);
console.log(rabbit.alive )
rabbit.eat();
rabbit.sleep();


console.log(`The name of animal is ${fish.name}`);
console.log(fish.alive )
fish.eat();
fish.sleep();

