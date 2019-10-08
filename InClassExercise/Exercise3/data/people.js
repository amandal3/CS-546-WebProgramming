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

module.exports = {
    getPeople,
    getPersonById,
};