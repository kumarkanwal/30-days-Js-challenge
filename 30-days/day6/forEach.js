// forEach() = method used to iterate over the elements
// of a array and apply a specific function(callback)\
//  to each element

function display(element){
    console.log(element);
}

function double(element,index,array){
    array[index] = element * 2;
    

}

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);
numbers.forEach(double);


let fruits = ['apple', 'orange', 'banana', 'peach'];

fruits.forEach(capitilize);
fruits.forEach(display);

function toUppercase(element){
    element.toUpperCase();
}

function toUpperCase(element,index,array){
    array[index] = element.toUpperCase();
}

function capitilize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
