const people = require("./people");
const weather = require("./weather");
const work = require("./work");

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
    console.log('\n              weather.js')
    console.log('=========================================')
    console.log('Testing shouldTheyGoOutside Function:\n')
    try {
        //Error
        const goOutt = await weather.shouldTheyGoOutside("Robert", "Ly")
        console.log(goOutt)
    } catch (e) {
        console.log(e);
    }
    try {
        //Returns: "Yes, Scotty should go outside."
        const goOut = await weather.shouldTheyGoOutside("Scotty", "Barajaz")
        console.log(goOut)
    } catch (e) {
        console.log(e);
    }
    try {
        //Returns: "No, Calli should not go outside."
        const goOut1 = await weather.shouldTheyGoOutside("Calli", "Ondrasek")
        console.log(goOut1)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const goOut2 = await weather.shouldTheyGoOutside()
        console.log(goOut2)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const goOut3 = await weather.shouldTheyGoOutside("Bob")
        console.log(goOut3)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const goOut4 = await weather.shouldTheyGoOutside("Bob", "Smith")
        console.log(goOut4)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const goOut4 = await weather.shouldTheyGoOutside("Calli", "Smith")
        console.log(goOut4)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const goOut4 = await weather.shouldTheyGoOutside(123, "Smith")
        console.log(goOut4)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const goOut4 = await weather.shouldTheyGoOutside(123, 123)
        console.log(goOut4)
    } catch (e) {
        console.log(e);
    }
    console.log('\n              work.js')
    console.log('=========================================')
    console.log('Testing whereDoTheyWork Function:\n')
    try {
        //Returns: "Demetra Durrand - Nuclear Power Engineer at Buzzshare. They will be fired."
        const work1 = await work.whereDoTheyWork("Demetra", "Durrand")
        console.log(work1)
    } catch (e) {
        console.log(e);
    }
    try {
        //Returns: "Hank Tarling - Technical Writer at Babbleblab. They will not be fired."
        const work2 = await work.whereDoTheyWork("Hank", "Tarling")
        console.log(work2)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const work4 = await work.whereDoTheyWork()
        console.log(work4)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const work5 = await work.whereDoTheyWork("Bob")
        console.log(work5)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const work6 = await work.whereDoTheyWork("Bob", "Smith")
        console.log(work6)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const work7 = await work.whereDoTheyWork("Hank", "Smith")
        console.log(work7)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const work8 = await work.whereDoTheyWork(123, "Smith")
        console.log(work8)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const work9 = await work.whereDoTheyWork(123, 123)
        console.log(work9)
    } catch (e) {
        console.log(e);
    }
    console.log('-----------------------------------------\n')
    console.log('Testing findTheHacker Function:\n')
    try {
        //Returns: "Robert Herley is the hacker!"
        const ip1 = await work.findTheHacker("79.222.167.180")
        console.log(ip1)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const ip2 = await work.findTheHacker("foobar")
        console.log(ip2)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const ip3 = await work.findTheHacker()
        console.log(ip3)
    } catch (e) {
        console.log(e);
    }
    try {
        //Error
        const ip4 = await work.findTheHacker(123)
        console.log(ip4)
    } catch (e) {
        console.log(e);
    }
    try {
        //Returns: "Winfield Latey is the hacker!""
        const ip5 = await work.findTheHacker("246.119.221.77")
        console.log(ip5)
    } catch (e) {
        console.log(e);
    }
    try {
        //Returns: "Alexia Stogill is the hacker!""
        const ip6 = await work.findTheHacker("243.163.95.31")
        console.log(ip6)
    } catch (e) {
        console.log(e);
    }
}


//call main
main()