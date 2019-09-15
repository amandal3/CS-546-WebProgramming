//3 useful functions when dealing with strings in JavaScript

function checkInput(inputVal, string) {
    if (typeof inputVal !== "string") {
        throw `${inputVal || "provided variable"} is not a string`;
    }
    return string;
}

//1. captialize(string)
//https://paulund.co.uk/how-to-capitalize-the-first-letter-of-a-string-in-javascript#targetText=This%20code%20snippet%20will%20use,charAt(0).toUpperCase()%3B
capitalize = function capititalize(string) {
    checkInput(string);
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

//2. repeat(string,num)
repeat = function repeat(string, num) {
    checkInput(string);
    //return string.repeat(times); used to compare with below
    if (typeof num === 'number') {
        let str = "";
        while (num > 0) {
            str = str + string
            num--;
        }
        return str;
    } else {
        throw "Invalid value for num"
    }
}

//3. countChars(string)
// Borrow from countElements
const arrayUtils = require("./arrayUtils");
countChars = function countChars(string) {
    checkInput(string);
    //NOT SURE
}

module.exports = {
    capitalize,
    repeat,
    countChars
};