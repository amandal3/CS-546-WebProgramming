const express = require("express");
const router = express.Router();
const data = require("../data");
const prime = data.prime;

router.get("/static", (req, res) => {
    res.render("prime/static", {});
});

router.get("/server", (req, res) => {
    res.render("prime/server", {});
});

router.post("/server", (req, res) => {
    let inputNumber = parseInt(req.body.number1);
    let result;

    try {
        result = prime.isPrime(inputNumber);
    } catch (e) {
        res.render("prime/server", {
            inputNumber: inputNumber,
            result: result,
            error: e
        });
        return;
    }
});

module.exports = router;