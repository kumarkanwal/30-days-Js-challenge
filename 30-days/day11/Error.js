// Error = An Object that is created to represent a problem that occurs
// Occur often with user input or extablishing a connection




// try {}  = Encloses code that might potentially cause an error
// catch {} = Catch and handle any thrown Errors from try{}
// finally {} = {optional} Always executes, Used mostly for clean up
// ex. close files, close connections, release resources


// console.log("Hello")
// console.log("You have reached the end");


try{

    // errors can be encountered 
//  NETWORK ERRORS
// PROMISE REJECTION
// SECURITY ERRORS
    console.log("Hello")
console.log("You have reached the end");
// console.log(x)10

}

catch(error){
console.error(error);
}

finally{
// CLOSE FILES
// CLOSE CONNECTIONS
// RELEASE RESOURCES
}

try{
const dividend = Number(window.prompt("Enter a dividend: "));
const divisor = Number( window.prompt("Enter a dividend: "));

if(divisor == 0 ){
    throw new Error("you can't divide by Zero!");
}
if(isNaN(dividend) || isNaN(divisor)){
    throw new Error("Values must be a number");
}
const result = dividend / divisor;
console.log(result);

console.log("you Reached end of the programe")

}

catch(error){
    console.error(error);
}