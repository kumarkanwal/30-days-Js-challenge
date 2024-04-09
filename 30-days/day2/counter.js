const myText = document.getElementById('myText');
const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const reset = document.getElementById('reset');
let count = 0;

increment.onclick =  ()=> {
    count++;
    myText.textContent = count;
}
decrement.onclick =  ()=> {
    count--;
    myText.textContent = count;
}
reset.onclick =  ()=> {
    count = 0;
    myText.textContent = count;
}