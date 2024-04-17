// nested objects = objects inside of other Objects.
// Allows you to represent more complex  data structures 
// Child Objects is enclosed by a parent Object
 
// Person{Address{},contact{}}

// shoppingCard{keyboard{},Mouse{},Monitor{}}

// const person = {
//     fullname : "kanwal Kumar",
//     age: 30,
//     isStudent: true,
//     hobbies: ["kerate","jellyfishing","cooking"],
//     address : {
//         street : "123 conch St.",
//         city : "Bikini Bottom",
//         county : "International water"

//     }
// }

// console.log(person.fullname);
// console.log(person.age);
// console.log(person.isStudent);        
// console.log(person.hobbies[2]);
// console.log(person.address.city);

// for(const property in person.address){
//     console.log(person.address[property]);
// }



// class Person{
//     constructor(name,age,...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);


//     }

// }

// class Address{
//     constructor(street,city,country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("kanwal","22","123 const st.", "Bikini Bottom", "Int. Waters");
// const person2 = new Person("raj","12","123 const st.", "Bikini Bottom", "Int. Waters");
// const person3 = new Person("vishal","14","123 const st.", "Bikini Bottom", "Int. Waters");

// console.log(person2)



const fruits = [
    {name : "apple" , color : "red", Calories : 95},
    {name : "orange" , color : "orange", Calories : 45},
    {name : "banana" , color : "yellow", Calories : 105},
    {name : "cononut" , color : "white", Calories : 159},
    {name : "pineapple" , color : "yellow", Calories : 37}
]
// ---------------foreach method()---------------------

console.log(fruits[0].name);
fruits.push({name:"grapes",color:"green" , Calories: 90})


fruits.forEach(fruit=>{console.log(fruit.name)})

// ---------------map method()---------------------

const fruitNames = fruits.map(fruit => fruit.name);
const fruitcolors = fruits.map(fruit => fruit.color);
const fruitcalories= fruits.map(fruit => fruit.Calories);

console.log(fruitNames )
console.log(fruitcalories )
console.log(fruitcolors )

// ---------------filter method()---------------------
const yellowFruits = fruits.filter(fruit=> fruit.color === "yellow"  );
const lowCalFruits = fruits.filter(fruit=> fruit.Calories > 100  );
const highCalFruits = fruits.filter(fruit=> fruit.Calories < 100  );

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// ---------------reduce method()---------------------


const maxFruit = fruits.reduce((max,fruit)=> fruit.Calories > max.Calories ?
                                             fruit : max);
const minFruit = fruits.reduce((min,fruit)=> fruit.Calories < min.Calories ?
                                             fruit : min);

console.log(maxFruit.Calories)
console.log(minFruit.Calories)

