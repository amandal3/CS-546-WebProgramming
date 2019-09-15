/*I used the following site:
https://webbjocke.com/javascript-check-data-types/
function checkArray(input) {
    return input && typeof input === 'object' && input.constructor === Array;
}
Couldn't get above to work */


//To check if arrays exist, I used Array.isArray()
//Found information from: https://www.geeksforgeeks.org/javascript-array-isarray-function/

//1. head(array)
head = function head(array) {
    if (array !== undefined && Array.isArray(array) && array.length !== 0) {
        return array[0];
    } else if (array == undefined) {
        throw "Undefined array.";
    } else {
        throw "Array is empty.";
    }
}

//2. last(array)
last = function last(inputarray) {
    if (inputarray !== undefined && Array.isArray(inputarray) && inputarray.length !== 0) {
        return inputarray[inputarray.length - 1];
    } else if (inputarray == undefined) {
        throw "Undefined array.";
    } else {
        throw "Array is empty.";
    }
}

//3. remove(array,index)
remove = function remove(array, index) {
    if (array !== undefined && Array.isArray(array) && array.length !== 0) {
        if (index < array.length) {
            //delete array[index]; does not work as intended
            //instead used splice: https://love2dev.com/blog/javascript-remove-from-array/
            for (i = 0; i < array.length; i++) {
                array.splice(index, i);
            }
            return array;
        } else {
            throw "Index not in array";
        }
    } else if (array === undefined) {
        throw "Undefined array.";
    } else {
        throw "Array is empty.";
    }
}

//4. range(end,value)
range = function range(end, value) {

}



//5. countElements(array)
countElements = function countElements(array) {

}


//6. isEqual(arrayOne, arrayTwo)
isEqual = function isEqual(arrayOne, arrayTwo) {

}

module.exports = {
    head,
    last,
    remove,
    range,
    countElements,
    isEqual
    // QUESTION: why does the head function not work inside here? 
    /*head: (array) => {
        if (array !== undefined && Array.isArray(array) && array.length !== 0) {
            return array[0];
        } else if (array === undefined) {
            throw "Undefined array.";
        } else {
            throw "Array is empty."
        }
    },*/
};