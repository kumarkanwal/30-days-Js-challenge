// ternary operator = a shortcut to if() and else() statements 
// helps to assign a varaible based on a condition
// condition ? codeIfTrue : codeIfFalse


// let age = 21;
// let message = age >= 18 ? "you are an adult" : "you're a minor";

// let time = 16;
// let greeting = time < 12 ?"Good Morning" : "Goof afternoon";
// console.log(greeting);

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(`your total is ${purchaseAmount - purchaseAmount * (discount / 100)}`);