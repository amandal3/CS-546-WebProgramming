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
    if (typeof end === 'number' && end > 0) {
        if (value == null) { //when not specified
            let numarray2 = [];
            let i = 0;
            while (i < end) {
                numarray2.push(i);
                i++;
            }
            return numarray2;
            /*
            let numarray = [];
            for (i = 0; i < end; i++) {
                numarray[i] = value;
            }
            return numarray;
            */
        } else {
            /*
            let numarray2 = [0];
            let i = 1;
            while (i < end) {
                numarray2.push(i);
                i++;
            }
            return numarray2;
            */
            //when specified, each element will be set to that value
            let numarray = [];
            for (i = 0; i < end; i++) {
                numarray[i] = value;
            }
            return numarray;
        }
    } else {
        throw "End argument is not valid"
    }
    //Question: Why does it not work when i do value !== null first?
}

//5. countElements(array)
//NEED HELP
countElements = function countElements(array) {
    if (array !== undefined && Array.isArray(array)) {
        for (i = 0; i < array.length; i++) {
            let newArray = [0];
            let count = array[i];
            if (newArray[count] > 0) {
                newArray[count] += 1;
            } else {
                newArray[count] = 1;
            }
        }
        return newArray[count];
    } else if (array.length == 0) {
        console.log("Empty array");
    } else {
        throw "Invalid array.";
    }
}


//6. isEqual(arrayOne, arrayTwo)
//need help with empty arrays and order
isEqual = function isEqual(arrayOne, arrayTwo) {
    if (Array.isArray(arrayOne) && Array.isArray(arrayTwo)) {
        if (arrayOne !== undefined && arrayTwo !== undefined) {
            if (arrayOne.length !== arrayTwo.length) {
                return false;
            } else {
                for (i = 0; i < arrayOne.length; i++) {
                    if (arrayOne[i] == arrayTwo[i]) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return true;
            }
        }
    } else {
        throw 'Invalid Array'
    }
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