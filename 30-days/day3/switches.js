 // Switch = can be an efficient replacement of many if and else statements

// let day = "";

// switch(day){

//     case 1: 
//     console.log("It is monday");
//     break;
//     case 2: 
//     console.log("It is tuesday");
//     break;
//     case 3: 
//     console.log("It is wednesday");
//     break;
//     case 4: 
//     console.log("It is thursday");
//     break;
//     case 5: 
//     console.log("It is friday");
//     break;
//     case 6: 
//     console.log("It is saturday");
//     break;
//     case 7: 
//     console.log("It is sunday and a holiday");
//     break;
//     default: console.log("Enter a value between 1 and 7")
// }

let testScore = 98;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    case testScore >= 50:
        letterGrade = "E";
        break;

    default : 
    letterGrade = "F";
}

console.log(letterGrade);
