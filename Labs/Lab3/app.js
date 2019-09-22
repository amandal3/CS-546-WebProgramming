const people = require("./people");
//const weather = require("./weather");

async function main() {
    console.log('               people.js')
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
        const id1 = await people.getPersonById(-1)
        console.log(id1)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const id2 = await people.getPersonById(1000)
        console.log(id2)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const id3 = await people.getPersonById()
        console.log(id3)
    } catch (e) {
        console.log(e);
    }
    console.log('-----------------------------------------\n')
    console.log('Testing lexIndex Function:\n')
    try {
        // Returns: "Dermot Abberley"
        const index = await people.lexIndex(2)
        console.log(index)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const index1 = await people.lexIndex(-1)
        console.log(index1)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const index2 = await people.lexIndex(1000)
        console.log(index2)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const index3 = await people.lexIndex()
        console.log(index3)
    } catch (e) {
        console.log(e);
    }
    console.log('-----------------------------------------\n')
    console.log('Testing firstNameMetrics Function:\n')
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
    /*console.log('               weather.js')
    console.log('=========================================')
    console.log('Testing shouldTheyGoOutside Function:\n')
    try {
        //Returns: "Yes, Scotty should go outside."
        const goOut = await people.shouldTheyGoOutside("Scotty", "Barajaz")
        console.log(goOut)
    } catch (e) {
        console.log(e);
    }
    try {
        //Returns: "No, Calli should not go outside."
        const goOut1 = await people.shouldTheyGoOutside("Calli", "Ondrasek")
        console.log(goOut1)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const goOut2 = await people.shouldTheyGoOutside()
        console.log(goOut2)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const goOut3 = await people.shouldTheyGoOutside("Bob")
        console.log(goOut3)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const goOut4 = await people.shouldTheyGoOutside("Bob", "Smith")
        console.log(goOut4)
    } catch (e) {
        console.log(e);
    }
    */
}


//call main
main()