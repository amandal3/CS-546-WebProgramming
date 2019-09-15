/*In your index.js file, you must import four functions from any 
of your modules and create a passing and failing test case for each.
*/
const arrayUtils = require("./arrayUtils");

//----------------------------------------------------------------------------
// Head Tests
console.log('-----------------------------------------');
console.log('Here we will be doing HEAD tests: \n');

try {
    // Should Pass
    console.log('head passed successfully\tReturns: ' + arrayUtils.head([2, 3, 4]));
} catch (e) {
    console.error('head failed test case');
}
try {
    // Should Fail
    console.error('head did not error\tReturns: ' + arrayUtils.head(1234));
} catch (e) {
    console.log('head failed successfully');
}
try {
    // Should Fail
    console.error('head did not error\tReturns: ' + arrayUtils.head([]));
} catch (e) {
    console.log('head failed successfully');
}
try {
    // Should Fail
    console.error('head did not error\tReturns: ' + arrayUtils.head("banana"));
} catch (e) {
    console.log('head failed successfully');
}
try {
    // Should Fail
    console.error('head did not error\tReturns: ' + arrayUtils.head());
} catch (e) {
    console.log('head failed successfully');
}
try {
    // Should Pass
    console.error('head passed successfully\tReturns: ' + arrayUtils.head([1, 2, 3]));
} catch (e) {
    console.log('head failed test case');
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
    console.error('last failed test case');
}
try {
    // Should Fail
    console.error('last did not error\tReturns: ', arrayUtils.last(1234));
} catch (e) {
    console.log('last failed successfully');
}
try {
    // Should Fail
    console.error('last did not error\tReturns: ' + arrayUtils.last([]));
} catch (e) {
    console.log('last failed successfully');
}
try {
    //Should Fail
    console.error('last did not error\tReturns: ' + arrayUtils.last("banana"));
} catch (e) {
    console.log('last failed successfully');
}
try {
    // Should Fail
    console.error('last did not error\tReturns: ' + arrayUtils.last());
} catch (e) {
    console.log('last failed successfully');
}
try {
    // Should Pass
    console.error('last passed successfully\tReturns: ' + arrayUtils.last([1, 2, 3]));
} catch (e) {
    console.log('last failed test case');
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
    console.error('remove failed test case');
}
try {
    // Should Fail
    console.error('remove did not error\tReturns: [', arrayUtils.remove(1234) + ']');
} catch (e) {
    console.log('remove failed successfully');
}
try {
    // Should Fail
    console.error('remove did not error\tReturns: [' + arrayUtils.remove([]) + ']');
} catch (e) {
    console.log('remove failed successfully');
}
try {
    //Should Fail
    console.error('remove did not error\tReturns: [' + arrayUtils.remove("banana") + ']');
} catch (e) {
    console.log('remove failed successfully');
}
try {
    // Should Fail
    console.error('remove did not error\tReturns: [' + arrayUtils.remove() + ']');
} catch (e) {
    console.log('remove failed successfully');
}
try {
    // Should Pass
    console.error('remove passed successfully\tReturns: [' + arrayUtils.remove([1, 2, 3], 1) + ']');
} catch (e) {
    console.log('remove failed test case');
}
try {
    // Should Fail
    console.error('remove did not error\tReturns: [' + arrayUtils.remove([1, 2, 3], 3) + ']');
} catch (e) {
    console.log('remove failed successfully');
}
console.log('-----------------------------------------\n');
//----------------------------------------------------------------------------