// // array= a variable like structure that can hold more than 1 value 

// let fruits = ["apple","orange", "banana"];
// fruits[3] = "coconut";

// console.log(fruits);

// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// fruits.push("pomegranate"); // adds value at the end
// fruits.pop(); // removes value from the end of the array
// fruits.unshift("pomegranate"); // adds value at the strt of array
// fruits.shift(); // removes value from the start of the array
// console.log(fruits[0]);

// console.log(fruits[4]);


// let numOfFruits = fruits.length; // length of the array
// console.log(numOfFruits);
// let index = fruits.indexOf("coconut");// index of the fruit in array
// // gives -1 when fruit not found in array 
// console.log(index)


// for( let i = 0; i < fruits.length; i++ ){

//     console.log(fruits[i]);
// }


// // reverse array 
// for( let i = fruits.length -1; i >= 0; i-- ){

//     console.log(fruits[i]);
// }

// for(let fruit of fruits){
//     console.log(fruit);
// }

// fruits.sort().reverse(); // sorts fruit in alphabetical order





// spread operator = ... allows an iterable such as an array or string 
// to be expanded into seperate elements (unpacks the elements)

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(maximum);
// console.log(minimum);

// let username = "Kanwal Kumar";
// let letters = [...username].join("-");
// console.log(letters)

// let fruits = ["apple" , "orange" , "banana"];
// let vegetables = ["carrots" , "celery" , "potatoes"];
// let newFruits = [...fruits];
// let foods = [...fruits , ..., "eggs", "milk"]
 
// console.log(newFruits);
// console.log(foods);



// rest parameters = [...rest) allows a function  work with a variable 
// number of arguments by bundling them into an array 

// spread = expands an array into seperate elements 
// rest = bundles seperate elements into array;


// function openFridge(...foods){  // rest
//     console.log(...foods); // spread

// }

// function getFood(...foods){  // from string to array 
//     return foods; 
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 =  "hotdog";
// const food4 = "sushu";
// const food5 = "ramen";

// openFridge(food1,food2,food3,food4,food5);
// const foods = getFood(food1,food2,food3,food4,food5);

// console.log(foods)

function sum(...numbers){
   let  result = 0;

   for( let number of numbers ){
    result += number;
   }

   return result;}
   
function getAverage(...numbers){
   let  result = 0;

   for( let number of numbers ){
    result += number;
   }


   return (result / numbers.length);
}

const total = sum(120,340,458,987,782)
const Average = getAverage(120,340,458,987,782)
console.log(`your total is ${total}`)
console.log(`your average is ${Average}`);



function combineStrings(...strings){
    return strings.join(' ');
}

const fullName = combineStrings("Mr.", "spongbob" , "squarepants", "III");
console.log(fullName);


