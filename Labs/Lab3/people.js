const axios = require('axios');

const getPeople = async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
}

const getPersonById = async function getPersonById(id) {
        let idVal = await getPeople();
        if (typeof id !== 'number') {
            throw `${id || "provided input"} is not a number`;
        }
        if (typeof id === 'undefined') {
            throw 'Undefined id';
        }
        if (id > 0 && id <= idVal.length) {
            for (let i = 0; i < idVal.length; i++) {
                if (idVal[i].id == id) {
                    return idVal[i].firstName + ' ' + idVal[i].lastName;
                }
            }
        } else {
            throw 'Invalid id number. Out of Range.'
        }
    }
    //https://www.c-sharpcorner.com/UploadFile/fc34aa/sort-json-object-array-based-on-a-key-attribute-in-javascrip/
    // function sortAlpha(prop) {
    //     return function(a, b) {
    //         if (a[prop] > b[prop]) {
    //             return 1;
    //         } else if (a[prop] < b[prop]) {
    //             return -1;
    //         }
    //         return 0;
    //     }
    // }

const lexIndex = async function lexIndex(index) {
    let alpha = await getPeople();
    if (typeof index !== 'number') {
        throw `${index || "provided input"} is not a number`;
    }
    if (typeof index === 'undefined') {
        throw 'Undefined index';
    }
    if (index > 0 && index <= alpha.length) {
        let sortL = alpha;
        //Created new list to store the it in order of alphabetical lastNames
        //https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
        sortL.sort((a, b) => {
                if (a.lastName > b.lastName) {
                    return 1;
                } else {
                    return -1;
                }
            })
            //if statement below debugged by B. Balaj; Kept getting undefined. Overlooked fact that index isnt element in array.
            //if (sortL.lastName == index) { 
        return sortL[index].firstName + ' ' + sortL[index].lastName;
        //}
    } else {
        throw 'Invalid index. Out of Range.'
    }
}

const firstNameMetrics = async function firstNameMetrics() {

}

module.exports = {
    getPeople,
    getPersonById,
    lexIndex
};