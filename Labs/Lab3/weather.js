const axios = require('axios');
const people = require('./people')

const getWeather = async function getWeather() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
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

const shouldTheyGoOutside = async function shouldTheyGoOutside(firstName, lastName) {
    let peeps = await people.getPeople();
    let list = await getWeather();

    checkInput(firstName, lastName);

    if (typeof firstName === 'undefined' || typeof lastName === 'undefined') {
        throw 'Undefined inputs';
    }
    let first = true;
    for (let i = 0; i < peeps.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (peeps[i].firstName === firstName) {
                if (peeps[i].lastName === lastName) {
                    if (peeps[i].zip === list[j].zip) {
                        if (list[j].temp >= 34) {
                            return 'Yes, ' + peeps[i].firstName + ' should go outside.'
                        } else {
                            return 'No, ' + peeps[i].firstName + ' should not go outside.'
                        }
                    }
                } else {
                    throw 'Invalid lastName'
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


// for (let i = 0; i < list.length; i++) {
//     if (list[i].zip === zip) {
//         if (list[i].temp >= 34) {
//             return 'Yes, ' + peeps[i].firstName + ' should go outside.'
//         } else {
//             return 'No, ' + peeps[i].firstName + ' should not go outside.'
//         }
//     }
// }


module.exports = {
    getWeather,
    shouldTheyGoOutside
};