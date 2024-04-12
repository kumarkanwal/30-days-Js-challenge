// .filter() = creates a new array by filtering 
// out elements

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
let eventNumbers = numbers.filter(isEven);


console.log(eventNumbers)
function isEven(element){
    return element % 2 === 0;
}
