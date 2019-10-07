const words = {
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}

function checkInput(inputVal, string) {
    if (typeof inputVal !== "string") {
        throw `${inputVal || "provided variable"} is not a string`;
    }
    return string;
}

module.exports = {
    description: "This is a dictionary for CS-546",
    lookupDefinition: (string1) => {
        checkInput(string1, "string");

        if (words[string1] == undefined) {
            throw "Word not in the dictionary";
        } else
            return words[string1];
    },
    getWord: (string1) => {
        checkInput(string1, "definition");
        let getWord = Object.keys(words).find(key => words[key] === string1);

        if (getWord == undefined) {
            throw "Word not found"
        }
        return getWord;
    }
};