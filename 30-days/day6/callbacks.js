// callback = a function that is passed as an argument to another function.

//  used to handle asynchronous operations;
// 1. Reading a file 
// 2. Network request
// 3. Interacting with database

//"Hey, when you're done, call this next."
hello(goodbye);
// goodbye();


function hello(callback){
    
    console.log("hello");
    callback();
       
}




function goodbye(){
    console.log("Goodbye!");
}

