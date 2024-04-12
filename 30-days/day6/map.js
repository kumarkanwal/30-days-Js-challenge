// .map() = accpets a callback and applies that function
// to each element of an array, then return a new array


// differentce is foreach make changes in original array
// map() creates a new array without applying changes to original array
const numbers = [1,2,3,4,5];
const students = ["kanwal", "vishal","raj"]
const squares = numbers.map(square);
const StudentUpper = students.map(uppercase);

console.log(squares)
console.log(StudentUpper)

function square(element){
    return Math.pow(element,2);
}

function lowercase(element){
    return element.toLowerCase();
}
function uppercase(element){
    return element.toUpperCase();
}

