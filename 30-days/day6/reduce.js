// .reduce() = reduce the elements of an array
// to a single value

const  prices = [5,10,30,25,15,20];
const total = prices.reduce(sum);
const max = prices.reduce(getMax);
const min = prices.reduce(getMin);

console.log(total);
console.log(max);
console.log(min);


function sum(accumulator,element){
    return accumulator + element;
}

function getMax(accumulator,element){
    return Math.max(accumulator,element);
}
function getMin(accumulator,element){
    return Math.min(accumulator,element);
}