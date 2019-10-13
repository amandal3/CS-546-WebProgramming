const express = require("express");
const router = express.Router();

const myInfo = {
    "name": "Amanda Ly",
    "cwid": "10416895",
    "biography": "Hey y'all. My name is Amanda Ly and I am a broke college student. I guess I'll let you in on a little secret about me - I am an EMT and life is crazy hectic. Dedicating your life to healthcare and the well-being others isn't always as glamorous as it seems. While on the surface, it may seem prestigious with its own perks, there are many underlying factors that others are not aware of. In my career of being an EMT, I have had the privilege of sharing some of the happiest moments with my patients and their loved ones when I am able to deliver good news. However, I've also been given the burden of uttering a single phrase and watching multiple worlds crash around me. One of the biggest perks of working as a public servant is the rare occurrence of running into a patient on the street and the gratitude I receive when they recognize and greet me with a simple hug or handshake. That perhaps may be the best perk of it all; knowing that I saved a life.(\n). Being a broke college student doesn't help matters. I come from my job to an empty fridge and a pigsty of an apartment created by my housemates. Hungry and tired, I always contemplated whether I should sleep or go out to a 24-hour fast food location to grab dinner. Usually, I stop by McDonalds. After taking care of my growling stomach, I'm exhausted and ready for bed. Just as I begin to lay down, I remember that sleep will not occur tonight, for the nightmare of homework and school is my reality. As I'm doing my homework and studying for my exams, it dawned on me that this my life. I just pray and pray that life will get easier. Hopefully retirement is just around the corner - specifically at the prime age of tomorrow. Long story short, I want a dog, or multiple dogs as a source of happiness, perhaps my only source of happiness in my never ending nightmare.",
    "favoriteShows": ["Gilmore Girls", "The Last Ship", "Grey's Anatomy", "The Resident", "Jeopardy", "Shooter", "The Great British Baking Show"],
    "hobbies": ["Cooking", "Traveling", "Golfing", "Wine Making"]
}

router.get("/", async(req, res) => {
    res.json(myInfo)
});

router.post("/", async(req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = router;