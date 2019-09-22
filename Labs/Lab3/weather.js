const axios = require('axios');

const getPeople = async function getWeather() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
    return data // this will be the array of people
}

const shouldTheyGoOutside = async function shouldTheyGoOutside(firstName, lastName) {
    let list = await getWeather();
}

module.exports = {
    getWeather,
    shouldTheyGoOutside
};