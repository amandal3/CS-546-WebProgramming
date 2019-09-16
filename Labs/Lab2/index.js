/*In your index.js file, you must import four functions from any 
of your modules and create a passing and failing test case for each.
*/
const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");

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
console.log('-----------------------------------------');
console.log('Here we will be doing countElements tests: \n');

try {
    // Should Pass
    console.log('countElements passed successfully\tReturns: ', arrayUtils.countElements([13, '13', 13, 'hello', true, true]));
} catch (e) {
    console.log(e);
}
try {
    // Should Pass
    console.log('countElements passed successfully\tReturns: ', arrayUtils.countElements([13, '13', 13, 'hello', true, true]));
} catch (e) {
    console.log(e);
}
try {
    // Should Pass
    console.log('countElements passed successfully\tReturns: ', arrayUtils.countElements([13, 13, 3, 3, 3, 13, 3]));
} catch (e) {
    console.log(e);
}
try {
    //Should Fail
    console.log('countElements did not error\tReturns: ', arrayUtils.countElements("banana"));
} catch (e) {
    console.log(e);
}
try {
    // Should Pass
    console.log('countElements passed successfully\tReturns: ', arrayUtils.countElements([]));
} catch (e) {
    console.log(e);
}
try {
    // Should Pass
    console.log('countElements passed successfully\tReturns: ', arrayUtils.countElements());
} catch (e) {
    console.log(e);
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
    console.log(e);
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
//----------------------------------------------------------------------------
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
//----------------------------------------------------------------------------
// countChars Test
console.log('-----------------------------------------');
console.log('Here we return an object that has the mapping of the character and the numer of times it appears in a string:\n');
try {
    /* Returns: {
          " ": 6,
          ",": 1,
          "H": 1,
          "e": 5,
          "h": 2,
          "i": 3,
          "l": 2,
          "n": 2,
          "o": 2,
          "p": 1,
          "s": 1,
          "t": 2,
          "v": 1
          }
       */
    console.log('Returns: ', stringUtils.countChars('Hello, the pie is in the oven'));
} catch (e) {
    console.log(e);
}
try {
    console.log('Returns: ', stringUtils.countChars([1234]));
} catch (e) {
    console.log(e);
}
try {
    console.log('Returns: ', stringUtils.countChars());
} catch (e) {
    console.log(e);
}
try {
    console.log('Returns: ', stringUtils.countChars([1, 2, 3, 4, 5]));
} catch (e) {
    console.log(e);
}
try {
    console.log('Returns: ', stringUtils.countChars([123]));
} catch (e) {
    console.log(e);
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// mapValues Test
console.log('-----------------------------------------');
console.log('Here we will do some mapping:\n');
try {
    console.log('Returns: ', objUtils.mapValues({ a: 1, b: 2, c: 3 }, n => n + 1));
} catch (e) {
    console.log(e);
}
try { //Fail
    console.log('Returns: ', objUtils.mapValues({ a: 1, b: 2, c: 3 }));
} catch (e) {
    console.log(e);
}
try { //Fail
    console.log('Returns: ', objUtils.mapValues(n => n + 1));
} catch (e) {
    console.log(e);
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// SMUSH Test
console.log('-----------------------------------------');
console.log('Here we will do smush:\n');
const first = { x: 2, y: 3 };
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

try { // { x: 0, y: 9, a: 70, z: 5, q: 10 }
    console.log('Returns: ', objUtils.smush(first, second, third));
} catch (e) {
    console.log(e);
}
try { // { a: 70, x: 0, z: 5, y: 9, q: 10 }
    console.log('Returns: ', objUtils.smush(second, third));
} catch (e) {
    console.log(e);
}
try { // { x: 4, y: 3, q: 10, a: 70, z: 5 }
    console.log('Returns: ', objUtils.smush(third, first, second));
} catch (e) {
    console.log(e);
}
try { // Invalid Args
    console.log('Returns: ', objUtils.smush());
} catch (e) {
    console.log(e);
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// Extend Test
console.log('-----------------------------------------');
console.log('Here we will do extend:\n');
const f = { x: 2, y: 3 };
const s = { a: 70, x: 4, z: 5 };
const t = { x: 0, y: 9, q: 10 };

try { // { x: 2, y: 3, a: 70, z: 5, q: 10 }
    console.log('Returns: ', objUtils.extend(f, s, t));
} catch (e) {
    console.log(e);
}
try { // { a: 70, x: 4, z: 5, y: 9, q: 10 } 
    console.log('Returns: ', objUtils.extend(s, t));
} catch (e) {
    console.log(e);
}
try { // { x: 0, y: 9, q: 10, a: 70, z: 5 }
    console.log('Returns: ', objUtils.extend(t, f, s));
} catch (e) {
    console.log(e);
}
try { // Invalid Args
    console.log('Returns: ', objUtils.extend());
} catch (e) {
    console.log(e);
}