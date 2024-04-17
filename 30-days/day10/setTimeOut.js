// setTimeout() = function in javascript that allows you to schedule
// the execution of a function after an amount of time (milliseconds)
// Times are approximation (varies based on the workload of the Javscript runtime env.)
// setTimeout(callback,delay); 

function sayHello(){
    window.alert("hello buddy");
}

setTimeout(sayHello, 3000);