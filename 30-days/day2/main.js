// type conversions = change the datatype of a value to another
// (Strings, numbers, booleans)


// let age = window.prompt("How old are you");
// age = Number(age);
// age += 1;

//  console.log(age, typeof age);


// let x = "pizaa";
// let y = "pizaa";
// let z = "pizaa";

// x = Number(x);
// y = String(y);
// z = String(z);

// console.log(x, typeof x );  // NaN "number"
// console.log(y, typeof y );  // pizza string
// console.log(z, typeof z );  // true boolean



// replacing pizza with 0

// let x = "0";
// let y = "0";
// let z = "0";

// x = Number(x);  
// y = String(y);  
// z = Boolean(z); 

// console.log(x, typeof x );  // 0 'number'
// console.log(y, typeof y );  // 0 string
// console.log(z, typeof z );  // true boolean

// with empty strings

// let x = "";
// let y = "";
// let z = "";

// x = Number(x);  
// y = String(y);  
// z = Boolean(z); 

// console.log(x, typeof x );  // 0 'number'
// console.log(y, typeof y );  // string
// console.log(z, typeof z );  // flase boolean  (when emoty it's false)


//  without assignment any value
// let y;
// let z;
// let x;

// x = Number(x);  
// y = String(y);  
// z = Boolean(z); 

// console.log(x, typeof x );  // NaN 'number'
// console.log(y, typeof y );  // undefined string
// console.log(z, typeof z );  // flase boolean 


// const =  a variable that can't be changed

const PI = 3.142;
let radius;
let circumference;

// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);

// circumference = 2 * pi *radius;
// console.log(circumference); 


document.getElementById('mySubmit').onclick = function() {

    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent =` Circumference : ${circumference} cm`  ;
 

}


