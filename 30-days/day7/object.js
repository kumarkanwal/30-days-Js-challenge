// // object = A collection of related properties and/or methods
// // Can represent real world objects (people, products, palces)
// // objects = {key : value,
// // function()}

// const person = {
//     firstName: "kanwal",
//     lastName : "kumar",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){
//         console.log("Hi, I am kanwal Kumar")
//     }
// }

// const person2 = {

//     firstName: "vishal",
//     lastName : "kumar",
//     age: 12,
//     isEmployed: false,
//     sayHello: function(){console.log("hello I am kanwal kumar")},
//     eat: ()=>{console.log("I am eating samosa, pakora, jallebi")}
// }

// console.log(person.firstName);
// console.log(person.lastName);

// console.log(person2.age);
// console.log(person2.isEmployed);
// console.log(person2.firstName);

// person.sayHello()
// person2.eat();





// this = reference to the object where THIS is used 
//(the object depends on the immediate context 
// person.firstName = this.firstName)


const person1 = {
    name: "kanwal kumar",
    favFood: "paneer",
    sayHello: function() {
        console.log(`hello! I am ${this.name} and I like ${this.favFood}`)
        // This keyword does work with arrow functions 
},
}

person1.sayHello(); 


