

function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars= "!@#$%&'()*+,-./";

    let allowedChars = "";
    let password = "";

    allowedChars +=  includeLowercase ? lowercaseChars : "";
    allowedChars +=  includeUppercase? uppercaseChars  :  "";
    allowedChars += includeNumbers?  numberChars  : "";
    allowedChars += includeSymbols  ? symbolsChars : "";
    
if(length <= 0){
    return `(password length must be at least 1)`;
}

if(allowedChars.length === 0){
    return `(At least one character needs to be selected)`;
}


for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password +=allowedChars[randomIndex];
}

    return password;
}

const passwordLength = 12;
const includeNumbers = true;
const includeLowercase = false;
const includeSymbols = false;
const includeUppercase = false;


const password = generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);


console.log(`Generated password: ${password}`);



