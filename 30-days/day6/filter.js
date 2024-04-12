// .filter() = creates a new array by filtering 
// out elements

// same  as a map() but it filters out elements that meet 
// the condition and make a new array out of them.

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
let eventNumbers = numbers.filter(isEven);


console.log(eventNumbers)
function isEven(element){
    return element % 2 === 0;
}


const ages = [16,17,18,18, 60]
let adults = ages.filter(isAdult);
let child = ages.filter(ischild);

const words = ['apple', 'orange','kiwi','coconut','pomegranate']
let shortWord = words.filter(shortWords);
console.log(shortWord);
console.log(adults); 
console.log(child); 


function isAdult(element){
    return element >= 18;
}
function ischild(element){
    return element < 18;
}

function shortWords(element){
    return element.length <= 6;
}
