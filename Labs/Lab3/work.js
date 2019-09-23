const axios = require('axios');
const people = require('./people')

const getWork = async function getWork() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    return data // this will be the array of people
}

function checkInput(inputVal1, inputVal2, string) {
    if (typeof inputVal1 !== "string" && typeof inputVal2 !== "string") {
        throw 'Both inputs are not strings'
    }
    if (typeof inputVal1 !== "string") {
        throw `${inputVal1 || "First variable"} is not a string`;
    }
    if (typeof inputVal2 !== "string") {
        throw `${inputVal2 || "Second variable"} is not a string`;
    }
    return string;
}

const whereDoTheyWork = async function whereDoTheyWork(firstName, lastName) {
    let ppl = await people.getPeople();
    let career = await getWork();

    checkInput(firstName, lastName);

    if (typeof firstName === 'undefined' || typeof lastName === 'undefined') {
        throw 'Undefined inputs';
    }
    let first = true;
    for (let i = 0; i < ppl.length; i++) {
        for (let j = 0; j < career.length; j++) {
            if (ppl[i].firstName === firstName) {
                if (ppl[i].lastName === lastName) {
                    if (ppl[i].ssn === career[j].ssn) {
                        if (career[j].willBeFired == true) {
                            return ppl[i].firstName + ' ' + ppl[i].lastName + ' - ' + career[j].jobTitle + ' at ' + career[j].company + '. They will be fired.'
                        } else {
                            return ppl[i].firstName + ' ' + ppl[i].lastName + ' - ' + career[j].jobTitle + ' at ' + career[j].company + '. They will not be fired.'
                        }
                    }
                } else {
                    throw 'Invalid lastName.'
                }
            } else {
                first = false;
            }
        }
    }
    if (first === false) {
        throw 'Invalid firstName. Did not check lastName.'
    }
}

const findTheHacker = async function findTheHacker(ip) {

}


module.exports = {
    getWork,
    whereDoTheyWork,
    findTheHacker
};