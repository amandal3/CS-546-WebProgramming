const express = require("express");
const router = express.Router();

const myInfo = [{
        "schoolName": "The Ovington School (P.S. 176)",
        "degree": "Elementary School Diploma",
        "favoriteClass": "Science",
        "favoriteMemory": "The most memorable moment from elementary school was when my fourth-grade class and I got our substitute teacher fired. She was a horrendous person. Our original teacher was on maternity leave and we were given this substitute teacher that could care less about children and their education. She allowed it to rain into the classroom and would online shop while giving is busy work. We felt like we ruled the school."
    },
    {
        "schoolName": "Christa McAuliffe (I.S. 187)",
        "degree": "Junior High School Diploma",
        "favoriteClass": "Art",
        "favoriteMemory": "The most memorable moment from middle school was during a fire drill. It wasn't quite a fire drill. The alarms went off and the firetrucks came all for a burnt pepperoni in the lunch room."
    },
    {
        "schoolName": "Brooklyn Technical High School",
        "degree": "High School Diploma",
        "favoriteClass": "CIM - Computer Integrated Manufacturing",
        "favoriteMemory": "The most memorable moment in high school was during an NHS event, the Alumni event, where I met and talked to an Alum from 1921. He was the oldest Alum to have come to the event. He had nothing but fond memories of his time at the school. This school used to be an all-boys high school so he was still surprised to see females at this school. It was heartwarming to be his guide for the day and I had never felt so much school pride before. It was refreshing."
    },
    {
        "schoolName": "Stevens Institute of Technology",
        "degree": "Bachelors of Engineering",
        "favoriteClass": "E115-Intro to Programming",
        "favoriteMemory": "The most memorable moment was when my friend and I went around picking flowers from on campus and then  microwaving it to make a flower press."
    }
]

router.get("/", async(req, res) => {
    res.json(myInfo)
});

router.post("/", async(req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = router;