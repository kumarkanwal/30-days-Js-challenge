// Date Objects =  Objects  that  contain values  that represent dates and times 
//  These date objects can be change and formatted

// Datw(year, month, day, hour, minute, second, ms)

const date = new Date();

date.setFullYear(2025);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(45);
date.setMilliseconds(3000);



const date2 = new Date("2024-01-02T12:00:00Z");
const date3 = new Date(1700000000000);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();      
const hours = date.getHours();       
const minute = date.getMinutes();       
const second = date.getSeconds();       
const miliseonds = date.getMilliseconds();  
const dayOfWeek = date.getDay();     


console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minute);
console.log(second);
console.log(miliseonds);
console.log(dayOfWeek);

