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
    let list = await getPeople();
    let totalLetters = 0,
        totalVowels = 0,
        totalConsonants = 0,
        longestName = ' ',
        shortestName = ' ';
    let countL = 0, //for max, so it starts small 
        countS = 100; //for min, so starts insanely large(to be safe) so it'll find something smaller when comparing
    for (i = 0; i < list.length; i++) {
        for (j = 0; j < list[i].firstName.length; j++) {
            //Borrowed from Lab1
            if (list[i].firstName[j].match(/[aeiouAEIOU]/)) {
                totalVowels += 1;
                totalLetters += 1;
            } else {
                totalConsonants += 1;
                totalLetters += 1;
            }
            //totalConsonants = totalLetters - totalVowels;
        }
        if (countL < list[i].firstName.length) {
            countL = list[i].firstName.length;
            longestName = list[i].firstName;
        } else if (countS > list[i].firstName.length) {
            countS = list[i].firstName.length;
            shortestName = list[i].firstName;
        }
    }
    //used to debug count to make sure it was working;
    //let count = '\nLongest name: ' + countL + "\nShortest name: " + countS;
    //return countL;
    let ans = 'Total Letters: ' + totalLetters + '\nTotal Vowels: ' + totalVowels + "\nTotal Consonants: " + totalConsonants + '\nLongest name: ' + longestName + "\nShortest name: " + shortestName;
    return ans;
}

module.exports = {
    getPeople,
    getPersonById,
    lexIndex,
    firstNameMetrics
};