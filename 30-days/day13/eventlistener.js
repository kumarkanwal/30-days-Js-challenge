// eventListener = Listen for specific event to create interactive web pages
// events: click, mouseover, mouseout
// .addEventListener(event,callback);




// const mybox = document.getElementById('mybox');
// const btn = document.getElementById('btn')

// mybox.addEventListener('mouseout' , event =>{

//     event.target.textContent = "you mouse out";
//     event.target.style.backgroundColor = "red"
// })
// function changeColor(event){
//     event.target.style.backgroundColor = 'tomato';
//     event.target.textContent = "OUGH😂"

// }

// btn.addEventListener('click',changeColor);

// btn.addEventListener('mouseover' , event =>{

//     mybox.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it 🥹"; // target the btn
// })


// keyboard events

// eventlistener = Listen for specific events to create interactive web pages
// events: keydown, keyup 
// document.getEventListener(event, callback); 


const mybox = document.getElementById('mybox');
document.addEventListener('keydown', event => {
    mybox.style.backgroundColor = "tomato";
    mybox.textContent = '🥹';
})
document.addEventListener('keyup', event => {
    mybox.style.backgroundColor = "lightblue";
    mybox.textContent = '😂'
})