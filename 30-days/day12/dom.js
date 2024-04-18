// DOM =  DOUCMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser
// and provides you with an API to interact with it . 
// Web browser constructs the DOM when it loads an HTML document.
// and structure all the elements in a tree-like representation
// Javascript can access the DOM to dynamically
// change the content , structure and style of a web.

document.getElementById("");
console.log(document);
console.dir(document);

document.title = "My website";

document.body.style.backgroundColor = 'hsl(0,0%,50%)';


const username = "Kanwal kumar";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? 'Guest' : username;