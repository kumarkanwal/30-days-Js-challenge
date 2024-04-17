// setTimeout() = function in javascript that allows you to schedule
// the execution of a function after an amount of time (milliseconds)
// Times are approximation (varies based on the workload of the Javscript runtime env.)
// setTimeout(callback,delay); 

// function sayHello(){
//     window.alert("hello buddy");
// }

// setTimeout(sayHello, 3000);
// setTimeout(() => window.alert("hello kanwal is here"), 3000);


// const timeoutId = setTimeout(() => window.alert("Hello"),3000);

// to cancle setTimeout function 
// clearTimeout(timeoutId);


let timeoutId;


function startTimer(){
   timeoutId = setTimeout(() => window.alert("Hello"),3000);
};

function clearTimer(){
        clearTimeout(timeoutId);    
}
