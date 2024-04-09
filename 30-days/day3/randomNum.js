// let randomNum = Math.ceil( Math.random() * 6);
// console.log(randomNum);



const myButton = document.getElementById('myButton');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const max = 6 ;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = () => {
    randomNum1 = Math.ceil( Math.random() * max  )
    randomNum2 = Math.ceil( Math.random() * max  )
    randomNum3 = Math.ceil( Math.random() * max  )
    label1.textContent = randomNum1
    label2.textContent = randomNum2
    label3.textContent = randomNum3
}