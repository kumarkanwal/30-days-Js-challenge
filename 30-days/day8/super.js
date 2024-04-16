// super = keyword is used in classes to call the constructor
// access the properties and methods of a parent(superclass)
// this = this object
// super = the parent

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

    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed = runspeed;
    }

    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runspeed);
    }
}

class Fish extends Animal{

    constructor(name,age,swimSpeed){
        super(name,age);
        this.runspeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed);
    }
}


class Hawk extends Animal{

    constructor(name,age,flySpeed){
        super(name,age);
        this.runspeed = flySpeed;
    
        
    }

    run(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed)
    }
}

const  rabbit = new Rabbit("rabbit" ,1 ,25);
const  fish = new Rabbit("fish" ,2 ,12);
const  hawk = new Rabbit("hawk" ,3 ,50);
console.log(rabbit.name)
