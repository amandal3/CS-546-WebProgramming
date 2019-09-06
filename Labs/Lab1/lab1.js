//I pledge my honor that I have abided by the Stevens Honor System. -Amanda Ly

const questionOne = function questionOne(arr) {
    // Implement question 1 here
    var square = 1;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        square = arr[i] * arr[i];
        sum = sum + square;
    }
    return sum;
}

const questionTwo = function questionTwo(num) {
    // Implement question 2 here
    var result;
    var F0 = 0;
    var F1 = 1;
    if (num == 0)
        return F0;
    else if (num == 1)
        return F1;
    else if (num < 1)
        return F0;
    else {
        for (var i = 1; i < num; i++) {
            result = F0 + F1;
            F0 = F1;
            F1 = result;
        }
        return result;
    }
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    //https://www.geeksforgeeks.org/javascript-match/
    //https://stackoverflow.com/questions/9230595/javascript-match-function-for-special-characters
    var counter = 0;
    for (var j = 0; j < text.length; j++) {
        if (text[j].match(/[aeiouAEIOU]/))
            counter = counter + 1;
    }
    return counter;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    //formula: factorial(n) = n * (n - 1) * (n - 2) ... * 1
    var factorial = 1; // not zero bc then it would always return zero
    if (num < 0)
        return NaN;
    else if (num == 0)
        return 1;
    else {
        for (var i = 2; i <= num; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }
}

module.exports = {
    firstName: "AMANDA",
    lastName: "LY",
    studentId: "10416895",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};