// Number Guessing game

const minNum = 25;
const maxNum = 100;
const answer = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {

    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("please enter a valid number!");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("please enter a valid number!");
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("TOO LOW! TRY AGAIN!");
        } 
        else if (guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN!");
        } 
        else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
 
        }
    }
}
