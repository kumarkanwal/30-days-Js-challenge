// sort() = method  used to sort elements of an array in place. 
// sorts elements as stringe in lexicographic order, not alphabetical
// lexicographics =  (alphabets + numbers + symbols) a sstrings


let numbers = [10, 5, 3, 2 , 6];  // 1,10,2,3,4   1 and then 10 after sorting
numbers.sort((a,b)=> {
    console.log(a, b);
    [1, 2]
    a = 2,b = 1
    return b-a;
});  
// numbers.sort((a,b)=> b-a);  
console.log(numbers);



const people = [
    {name: "kanwal", age:90,gpa:3.0},
    {name: "anish", age:30,gpa:1.5},
    {name: "raj", age:100,gpa:2.5},
    {name: "vishal", age:50,gpa:4.0}
];

let people2 = people.toSorted((a,b) => a.age - b.age);

console.log(people); 
console.log(people2); 


people.sort((a,b) => a.name.localeCompare(b.name));
console.log(people); 

// reverse name 
people.sort((a,b) => b.name.localeCompare(a.name));
console.log(people); 
