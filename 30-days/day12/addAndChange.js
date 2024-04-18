// ---------------- EXAMPLE 1 <h1> -------------

// STEP 1 CREATE THE ELEMENT

const newH1 = document.createElement('h1');
newH1.id = "myH1";
newH1.style.color = "tomato"
newH1.style.textAlign = "center"


// STEP 2  ADD ATTRIBUTE/RPOPERTIES

newH1.textContent = "I like burger";


// STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);

// document.body.insertBefore(newElement,currentElement);
document.body.insertBefore(newH1,box3);
// REMOVE HTML ELEMENT

// document.getElementById('box1').removeChild(newH1)
document.body.removeChild(newH1)
















