// string methods = allow you to manupulate and work with text (strings)

let userName = "kanwalKumar";

//console.log(userName.charAt(1)); // find the character at the particular index
//console.log(userName.indexOf("w")); // find the index of the particular character , no march = -1
userName.lastIndexOf("w") // find the index of the character starting from last
userName.length // geives the length of the string 
userName.trim() // trim the white space before or after the string.
userName.toUpperCase() // Make all string to uppercase
userName.toLowerCase() // Turn whole string to Lowercase
userName.repeat() // Repeat the string number of times as stated
userName.startsWith() // check if the string start with the particular character / boolean answer
userName.endsWith() // check if the string ends with the particular character / boolean answer
userName.includes() // check if string includes particular character
userName.replaceAll() // replace the particular character with any other character
userName.padStart(15) // make the string to particular length by adding extra character at the start.
userName.padEnd(20) // make the string to particular length by adding extra character at the end of the string.



// string slicing and creating a sub string from a portion of another string
                              
                                // String.slice(startindex, endIndex)

let fullName = "kanwal Kumar";

// let firstName = fullName.slice(0,6)
// let lastName = fullName.slice(7 ); // if want to slice till end so no need to provide end index


let firstName = fullName.slice(0, fullName.indexOf(" "))
let lastName = fullName.slice(fullName.indexOf(" ") + 1)
console.log(firstName)
console.log(lastName)




                                

