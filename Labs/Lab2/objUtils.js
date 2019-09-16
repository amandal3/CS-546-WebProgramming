//This file will export methods that are useful when dealing with objects in JavaScript

//1. extend(...args)
extend = function extend(...args) {
    var normArray = args;
    if (normArray, length >= 2) {
        if (typeof normArray === 'object') {
            if (normArray[i] !== undefined) {

            } else {
                throw 'Undefined.'
            }
        } else {
            throw 'Invalid type.'
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
    //extend,
    //smush,
    mapValues
};