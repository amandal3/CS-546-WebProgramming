const express = require("express");
const router = express.Router();
//const data = require("../data");
const peopleData = require("../data/people.js");

router.get("/", async(req, res) => {
    try {
        const people = await peopleData.getPeople();
        res.json(people);
    } catch (e) {
        res.status(404).json({ message: "not found!" });
    }
});

router.get("/:id", async(req, res) => {
    try {
        const parseID = parseInt(req.params.id);
        const person = await peopleData.getPersonById(parseID);
        res.json(person);
    } catch (e) {
        res.status(404).json({ message: "Person not found" });
    }
});

router.post("/", async(req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = router;