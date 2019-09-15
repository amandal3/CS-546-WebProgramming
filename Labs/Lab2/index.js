/*In your index.js file, you must import four functions from any 
of your modules and create a passing and failing test case for each.
*/
const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");

//----------------------------------------------------------------------------
// Head Tests
console.log('-----------------------------------------');
console.log('Here we will be doing HEAD tests: \n');

try {
    // Should Pass
    console.log('head passed successfully\tReturns: ' + arrayUtils.head([2, 3, 4]));
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('head did not error\tReturns: ' + arrayUtils.head(1234));
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('head did not error\tReturns: ' + arrayUtils.head([]));
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('head did not error\tReturns: ' + arrayUtils.head("banana"));
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('head did not error\tReturns: ' + arrayUtils.head());
} catch (e) {
    console.log(e);
}
try {
    // Should Pass
    console.log('head passed successfully\tReturns: ' + arrayUtils.head([1, 2, 3]));
} catch (e) {
    console.log(e);
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//Last Tests
console.log('-----------------------------------------');
console.log('Here we will be doing LAST tests: \n');

try {
    // Should Pass
    console.log('last passed successfully\tReturns: ' + arrayUtils.last([2, 3, 4, 5]));
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('last did not error\tReturns: ', arrayUtils.last(1234));
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('last did not error\tReturns: ' + arrayUtils.last([]));
} catch (e) {
    console.log(e);
}
try {
    //Should Fail
    console.log('last did not error\tReturns: ' + arrayUtils.last("banana"));
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('last did not error\tReturns: ' + arrayUtils.last());
} catch (e) {
    console.log(e);
}
try {
    // Should Pass
    console.log('last passed successfully\tReturns: ' + arrayUtils.last([1, 2, 3]));
} catch (e) {
    console.log(e);
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// Remove Tests
console.log('-----------------------------------------');
console.log('Here we will be doing REMOVE tests: \n');

try {
    // Should Pass
    console.log('remove passed successfully\tReturns: [' + arrayUtils.remove([5, 6, 7], 1) + ']');
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('remove did not error\tReturns: [', arrayUtils.remove(1234) + ']');
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('remove did not error\tReturns: [' + arrayUtils.remove([]) + ']');
} catch (e) {
    console.log(e);
}
try {
    //Should Fail
    console.log('remove did not error\tReturns: [' + arrayUtils.remove("banana") + ']');
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('remove did not error\tReturns: [' + arrayUtils.remove() + ']');
} catch (e) {
    console.log(e);
}
try {
    // Should Pass
    console.log('remove passed successfully\tReturns: [' + arrayUtils.remove([1, 2, 3], 1) + ']');
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('remove did not error\tReturns: [' + arrayUtils.remove([1, 2, 3], 3) + ']');
} catch (e) {
    console.log(e);
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// Range Tests
console.log('-----------------------------------------');
console.log('Here we will be doing RANGE tests: \n');

try {
    // Should Pass
    console.log('range passed successfully\tReturns: [' + arrayUtils.range(4) + ']');
} catch (e) {
    console.log(e);
}
try {
    //Should Fail
    console.log('range did not error\tReturns: [' + arrayUtils.range("banana") + ']');
} catch (e) {
    console.log(e);
}
try {
    // Should Pass
    console.log('range passed successfully\tReturns: [' + arrayUtils.range(4, 'hi') + ']');
} catch (e) {
    console.log(e);
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// Count Elements Tests
/*
console.log('-----------------------------------------');
console.log('Here we will be doing countElements tests: \n');

try {
    // Should Pass
    console.log('countElements passed successfully\tReturns: ' + arrayUtils.countElements([13, '13', 13, 'hello', true, true]));
} catch (e) {
    console.error('countElements failed test case');
}
try {
    //Should Fail
    console.error('countElements did not error\tReturns: ' + arrayUtils.countElements("banana"));
} catch (e) {
    console.log('countElements failed test case');
}
try {
    // Should Pass
    console.log('countElements passed successfully\tReturns: ' + arrayUtils.countElements());
} catch (e) {
    console.error('countElements failed test case');
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// IsEqual Tests
console.log('-----------------------------------------');
console.log('Here we will be doing isEqual tests: \n');

try {
    // True
    console.log('isEqual results\tReturns: ' + arrayUtils.isEqual([1, 2, 3], [1, 2, 3]));
} catch (e) {
    console.log(e);
}
try {
    // False
    console.log('isEqual results\tReturns:', arrayUtils.isEqual([1, 2, 3], [4, 5, 6]));
} catch (e) {
    console.log(e);
}
try {
    // False
    console.log('isEqual results\tReturns:', arrayUtils.isEqual([1, 2, 3], [4, 5]));
} catch (e) {
    console.log(e);
}
try {
    // False
    console.log('isEqual results\tReturns:', arrayUtils.isEqual([1, 2, 3], [1, 2]));
} catch (e) {
    console.log(e);
}
try {
    // False
    console.log('isEqual results\tReturns:', arrayUtils.isEqual([1], []));
} catch (e) {
    console.log(e);
}
try {
    // Should Fail
    console.log('isEqual results\tReturns:', arrayUtils.isEqual());
} catch (e) {
    console.log(e);
}
try {
    // False
    console.log('isEqual results\tReturns:', arrayUtils.isEqual(['cookie'], [1]));
} catch (e) {
    console.log(e;
}
try {
    // False
    console.log('isEqual results\tReturns:', arrayUtils.isEqual(['cookie', 'usa'], [1, 'cookie']));
} catch (e) {
    console.log(e);
}
try {
    // False
    console.log('isEqual results\tReturns:', arrayUtils.isEqual([], []));
} catch (e) {
    console.log(e);
}
try {
    // False
    console.log('isEqual results\tReturns:', arrayUtils.isEqual([1, 2, 3], [1, 3, 2]));
} catch (e) {
    console.log(e);
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------*/
//----------------------------------------------------------------------------
// Capitalize Test
console.log('-----------------------------------------');
console.log('Here we will capitalize the first letter and lowercase the remaining letters: \n');
try {
    // Returns: Foobar
    console.log('Returns:', stringUtils.capitalize('foobar'));
} catch (e) {
    console.log(e);
}
try {
    // Returns: Foobar
    console.log('Returns:', stringUtils.capitalize('FOOBAR'));
} catch (e) {
    console.log(e);
}
try {
    // Returns: Thanksgiving is my favorite holiday.
    console.log('Returns:', stringUtils.capitalize('tHAnKSgIviNg is my FavoRite holIDAy.'));
} catch (e) {
    console.log(e);
}
try {
    // Fails
    console.log('Returns:', stringUtils.capitalize(4));
} catch (e) {
    console.log(e);
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// Repeat Test
console.log('-----------------------------------------');
console.log('Here we will repeat the string, num amount of times:\n');
try {
    // Returns: abcabcabc
    console.log('Returns: "', stringUtils.repeat('abc', 3) + ' "');
} catch (e) {
    console.log(e);
}
try {
    // Returns: abc
    console.log('Returns: "', stringUtils.repeat('abc', 1) + ' "');
} catch (e) {
    console.log(e);
}
try {
    // Returns: " "
    console.log('Returns: "', stringUtils.repeat('abc', 0) + ' "');
} catch (e) {
    console.log(e);
}
try {
    // Fails
    console.log('Returns:', stringUtils.repeat());
} catch (e) {
    console.log(e);
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------