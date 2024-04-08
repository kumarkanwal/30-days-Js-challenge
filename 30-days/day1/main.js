
// 1. declaration let x;
// 2. assignment x = 100;


// variable =  A container that stoes a CSSMathValue. 
// Bahaves as if it were the value it conains


//  data types  

// numbers  
let age = 25;
//    let price = 10.99;
//    let gpa = 2.1; 

// string  
let firstName = "kanwal";
//  let favouriteFood = "pizza";
//  let email = "kanwal123@gmail.com"; 

// Boolean  
// let online = true; 
// let forSale = false; 
let isstudent = true;




// document.getElementById("p1").textContent = firstName;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = isstudent;

// document.getElementById("p1").textContent = `your name is ${firstName}`;
// document.getElementById("p2").textContent = `your age is ${age}`;
// document.getElementById("p3").textContent =  `Enrolled student ${isstudent}`;


// arithmetic operators = operands (values, variables, etc.)
//    operators (+ - * /)


let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// students = students % 2;
// let extraStudents = students % 3;

// students +=1;
// students -=1;
// students /=2;
// students *=2
// students **= 2;
// students %= 2;

// increment and decrement operators 

// students--;
// students++;


 // operator precedence 
// 1. parenthesis ()
// 2. exponents
// 3. multiplication & division & modulo
// 4. addition & subtraction

// let result = 1 + 2 * 3 + 4 ** 2

// answer = 23 



//  How to accept the user input 
//  1. EASY WAY = window prompt 

// let username;

// username = window.prompt("what's your username?");
// console.log(username);

// 2. PROFESSIONAL WAY = HTML textbox 
let username;
document.getElementById("mySubmit").onclick = () => {
  username =   document.getElementById("username").value;
  document.getElementById("myH1").textContent = `Hello ${username}`
}





