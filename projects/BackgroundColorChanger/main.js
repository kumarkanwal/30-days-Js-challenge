// Selected All buttons and container
const buttons = document.querySelectorAll('button');  // all buttons
const buttonDiv = document.getElementById('buttons');  // div that contain all buttons
const container = document.querySelector('.container'); // main container inside the body 
const colorPicker = document.getElementById("colorPicker"); // input color picker
const randomColorCode = document.getElementById('colorCode'); // input that contain color picker code
const form = document.getElementById('form');                 // form of color picker input






// ------------------ accessing local storage ----------------------

// access data from the local storage
container.style.backgroundColor = localStorage.getItem("backgroundColor") || "wheat";
// setting local storage value to the input
colorPicker.value = localStorage.getItem("backgroundColor") || "wheat";




// ----------------------- random color input code-----------------------
//  fetching real time color change code through event listener
colorPicker.addEventListener('input', () => {
  const RandomColor = colorPicker.value;

  // adding color code into the input 
  randomColorCode.value = RandomColor;

  // adding background color to the container
  container.style.backgroundColor = RandomColor;

  // saving data to the local storage
  localStorage.setItem("backgroundColor", RandomColor);
})




// --------------- color buttons code ------------------
// foreach on all buttons 
buttons.forEach(button => {  

  button.addEventListener('click', () => {
    // accessing element css
    let buttonStyle = getComputedStyle(button);

    // adding background color to the container
    let buttonBackgroundColor = buttonStyle.backgroundColor;
    container.style.backgroundColor = buttonBackgroundColor;

    // saving data to the local storage
    localStorage.setItem("backgroundColor", buttonBackgroundColor);
  })


  
});  // foreach loop for buttons  ends here 



