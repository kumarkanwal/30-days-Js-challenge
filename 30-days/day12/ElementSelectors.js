// element selector = Methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML elements
//  from the DOM (Document Object Model)


// 1. document.getElementById()   // Element or null
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementByTagName()  // HTML Collection
// 4. document.querySelector()        // ELEMENT OR NULL
// 5. document.querySelectorAll()    // NODELIST

const myHeading = document.getElementById('my-heading');
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName('fruits');
fruits[0].style.backgroundColor = "yellow";

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

// we cannot use foreach with HTML collection directly or data that fetch using  ClassName
Array.from(fruits).forEach( fruit => {
    fruit.style.backgroundColor = "lightgreen";
}
)


// we can use forEach with nodelist such as elements fetch with querySelectorAll

    




