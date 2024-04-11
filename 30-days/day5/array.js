// array= a variable like structure that can hold more than 1 value 

let fruits = ["apple","orange", "banana"];
fruits[3] = "coconut";

console.log(fruits);

console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits.push("pomegranate"); // adds value at the end
fruits.pop(); // removes value from the end of the array
fruits.unshift("pomegranate"); // adds value at the strt of array
fruits.shift(); // removes value from the start of the array
console.log(fruits[0]);

console.log(fruits[4]);


let numOfFruits = fruits.length; // length of the array
console.log(numOfFruits);
let index = fruits.indexOf("coconut");// index of the fruit in array
// gives -1 when fruit not found in array 
console.log(index)


for( let i = 0; i < fruits.length; i++ ){

    console.log(fruits[i]);
}


// reverse array 
for( let i = fruits.length -1; i >= 0; i-- ){

    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort().reverse(); // sorts fruit in alphabetical order
