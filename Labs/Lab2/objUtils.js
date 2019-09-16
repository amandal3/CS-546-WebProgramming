//This file will export methods that are useful when dealing with objects in JavaScript

//1. extend(...args)
extend = function extend(...args) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    let normArray = args;
    let result = new Object();
    if (normArray.length >= 2) {
        for (i = 0; i < normArray.length; i++) {
            if (typeof normArray[i] === 'object') {
                for (var property in normArray) {
                    result[i] = normArray[property];
                }
            } else {
                throw 'Invalid. Argument not an object.'
            }
            return result[i];
        }
    } else {
        throw 'Invalid arguments.';
    }
}


//2. smush(args)
smush = function smush(...args) {

}


//3. mapValues(object, func)
mapValues = function mapValues(object, func) {
    if (typeof object === 'object' && typeof func === 'function' && object !== undefined && func !== undefined) {
        //https://www.w3schools.com/js/js_object_properties.asp for in loop
        for (x in object) {
            //https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
            object[x] = func(object[x]);
        }
        return object;
    } else {
        throw 'Try Again'
    }
}


module.exports = {
    extend,
    //smush,
    mapValues
};