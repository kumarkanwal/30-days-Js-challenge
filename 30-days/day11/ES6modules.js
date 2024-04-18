// ES6 module = An external file that contains reusable code 
//  that can be important into other Javascript files.
//  write reusable code for many different apps,
// Can contain varaibles, classes, functions ... and more
// introduction as part of ECMAScript 2015 update


import {PI,getCircumference,getArea,getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);
console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm`);
console.log(`${volume.toFixed(2)}cm`);






