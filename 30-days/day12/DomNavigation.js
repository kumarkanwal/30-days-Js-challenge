// Dom Navigation  = The process of navigating through the structure of an HTML document using Javscript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// parentElement
// .children

const element = document.getElementById("desserts");
const firstChild = element.firstElementChild;

firstChild.computedStyleMap.backgroundColor = "yellow";

const lastChild = element.lastelementChild;

// next siblings 

const element2 = document.getElementById('apple');
const nextSibling = element2.nextElementSibling;

nextSibling.backgroundColor = "yellow";

