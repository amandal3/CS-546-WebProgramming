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
            if (idVal[i].id === id) {
                return idVal[i];
            }
        }
    } else {
        throw 'Invalid id number. Out of Range.'
    }
}

function checkInput(inputVal, string) {
    if (typeof inputVal !== "string") {
        throw `${inputVal || "provided variable"} is not a string`;
    }
    return string;
}

const collectNames = async function collectNames(name) {
    let alpha = await getPeople();
    if (!name) throw 'Provide a name'
    if (typeof name === 'undefined') {
        throw 'Undefined name';
    }
    if (name == '') {
        throw 'Cannot be an empty string';
    }
    checkInput(name);
    //convert all to one case:
    var lower = name.toLowerCase();

    //https://flaviocopes.com/how-to-string-contains-substring-javascript/
    //https://www.w3schools.com/jsref/jsref_includes.asp
    //indexOf - returns index of where it appears
    //contains - returns true or false
    //includes - returns true or false
    //RegExp.text - returns true or false
    for (let i = 0; i < alpha.length; i++) {
        var convert = alpha[i].length.ToLowerCase();
        return convert;
    }
    var query = []
    var match = 0;
    for (let j = 0; j < convert.length; j++) {
        if (convert[j].length.firstName.includes(lower) || convert[j].length.lastName.includes(lower)) {
            query = query.push(convert[j]);
            match = match + 1;
        }
        if (match == 20) {
            break;
        }
    }
    return query;

}



module.exports = {
    getPeople,
    getPersonById,
    collectNames
};