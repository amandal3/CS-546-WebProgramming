const dic = require("./dictionary");

try {
    console.log(dic.lookupDefinition("programming"))
} catch (error) {
    console.log(error)
}

try {
    console.log(dic.lookupDefinition("pumpkin"))
} catch (error) {
    console.log(error)
}

try {
    console.log(dic.lookupDefinition(3))
} catch (error) {
    console.log(error)
}

try {
    console.log(dic.getWord("The action or process of writing computer programs."))
} catch (error) {
    console.log(error)
}

try {
    console.log(dic.getWord("Help."))
} catch (error) {
    console.log(error)
}

try {
    console.log(dic.getWord(13))
} catch (error) {
    console.log(error)
}