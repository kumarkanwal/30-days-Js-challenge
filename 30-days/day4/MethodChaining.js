// Method Chaining = Calling one method after another
// in one continuous line in code.

// ------------------- NO METHOD CHIAINING -------------------

let username = window.prompt("enter your username");
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();


let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);





// ------------ METHOD CHAIN --------------------------------

username= username.trim().charAt(0).toLocaleUpperCase()  + username.trim().slice(1).toLowerCase()
