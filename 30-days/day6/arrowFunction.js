// arrow functions = a concise way to write function expression
// good for simple functions that you use only once 
// (parameters)=> some code

const hello =(name)=> console.log(`Hello ${name}`);

hello("kanwal");

setTimeout(()=> console.log(`Hello`),3000);

const name = (name)=> console.log(`Square ${name}`);
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]

const square = numbers.map((element)=> Math.pow(element,2));
console.log(square);
const cube = numbers.map((element)=> Math.pow(element,3));
console.log(cube);

const even = numbers.filter( (element) => element % 2 === 0)
console.log(even);

const total = numbers.reduce((sum,number) => sum + number);
console.log(total);