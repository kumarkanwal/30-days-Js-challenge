// destructuring = extract values from arrays and objects,
// then assign them to variables in a convenient way 
// [] = to perform array destructuing
// { } = to perform object destructiring 
// exmaples



// ---------------- EXAMPLE 1 ------------------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b= 2;

[a, b] = [b, a]


// -------------- EXAMPLE 2 -------------
//  swap 2 ELEMENTS IN AN ARRAY

const colors = ["red","green","blue","black","white"];

[colors[0],colors[4]] = [colors[4],colors[0]]

// ------------- EXAMPLE 3 ------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor );
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


// -------------------EXMAPLE 4 ------------------
// EXTRACT VALUES FROM OBJECTS

// const person1 = {
//     firstName : "spongebob",
//     lastName : "kumar",
//     age: 30,
//     job: "Fry Cook",
// }
// const person2 = {
//     firstName : "raj",
//     lastName : "kumar",
//     age: 12,
// }

// const {firstName , lastName , age, job = employes} = person2;


// ----------------  EXMAPLE 5 --------------
// DESTRUCTURING IN FUNCTION PARAMETERS

function displayPerson({firstName,lastName,age,job="employed"}){
    console.log(`name: ${firstName + " " + lastName}`);
    console.log(`age: ${age}`)
    console.log(`job : ${job}`)

}


const person1 = {
    firstName : "spongebob",
    lastName : "kumar",
    age: 30,
    job: "Fry Cook",
}
const person2 = {
    firstName : "raj",
    lastName : "kumar",
    age: 12,
}

displayPerson(person1);
displayPerson(person2);