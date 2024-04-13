// constructor = special method for defining the properties 
// methods of objects

function Car(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`you drive ${this.model}`)};
}

let car1 = new Car("ford","Smith","2022","blue");

console.log(car1);
car1.drive();
