// function declaration = define a reusable block of code 
// that performs a specific task

// function expression = a way to define a function as
// values or variables

// If we are  going to use function only one time as a callback
// so it's more efficient to send enter function as an argument
// reduce( write function here as argument)
// map(write function here as argument)

// const hello = function(){
//     console.log('hello');
// };

// setTimeout(hello, 3000 );

// setInterval(function(){
//     console.log('hello');
// },3000);
const numbers = [1,2,3,4,5,6,7,8]

let square = numbers.map(
    function(element){
        return Math.pow(element, 2);
        }
)

console.log(square)


// function square(element){
// return Math.pow(element, 2);
// }

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})

const total = numbers.reduce(function(accumulator,element){
    return accumulator + element;
});
console.log(evenNums);
console.log(total);