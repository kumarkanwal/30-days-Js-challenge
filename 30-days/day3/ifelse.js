// If Statements  = if a condition is true, excute some code
// if not , do something else

// let age = 13;
// if(age >= 18){
//     console.log("you are old enough to enter this site");
// }
// else{
//     console.log("you must be 18+  to enter this site");
// }



// let isStudent = false;

// if(isStudent){
//     console.log("you are a student");
// }
// else{
//     console.log("you are not a student");
// }


let age = 17;
let hasLicense = true;

if(age >= 16){
    console.log("you are old enough to drive");

    if(hasLicense){
        console.log("you have your license");
    }else{
        console.log("you do not have your license yet!");
    }
}else{
    console.log("you must be 16+ to have a license in United States");
}