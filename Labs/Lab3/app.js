const people = require("./people");

async function main() {
    console.log("               people.js")
    console.log('=========================================')
    console.log('Testing getPersonById Function:\n')
    try {
        // Returns: "Brew Peat"
        const id = await people.getPersonById(43)
        console.log(id)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const id = await people.getPersonById(-1)
        console.log(id)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const id = await people.getPersonById(1000)
        console.log(id)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const id = await people.getPersonById()
        console.log(id)
    } catch (e) {
        console.log(e);
    }
    console.log('-----------------------------------------\n')
    try {
        // Returns: "Dermot Abberley"
        const index = await people.lexIndex(2)
        console.log(index)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const index = await people.lexIndex(-1)
        console.log(index)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const index = await people.lexIndex(1000)
        console.log(index)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const index = await people.lexIndex()
        console.log(index)
    } catch (e) {
        console.log(e);
    }
    console.log('-----------------------------------------\n')
    try {
        // Returns: 
        //   totalLetters: sum of all the letters in all the firstNames,
        //   totalVowels: sum of all the vowels in all the firstNames,
        //   totalConsonants: sum of all the consonants in all the firstNames,
        //   longestName: the longest firstName in the list,
        //   shortestName: the shortest firstName in the list
        console.log(await people.firstNameMetrics())
    } catch (e) {
        console.log(e);
    }

}


//call main
main()