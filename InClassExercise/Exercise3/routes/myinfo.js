const express = require("express");
const router = express.Router();

const myInfo = { name: 'Amanda Ly', dateOfBirth: '03/03', hometown: 'Brooklyn, NY' }

router.get("/", async(req, res) => {
    res.json(myInfo)
});

router.post("/", async(req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = router;