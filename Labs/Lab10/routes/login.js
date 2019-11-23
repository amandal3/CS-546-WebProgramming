const express = require('express');
const session = require("express-session") //this too
const router = express.Router();
const bcrypt = require("bcryptjs"); //dont you need this
const data = require('../data');
const usersData = data.users;
const saltRounds = 16;

router.post('/', async(req, res) => {

    const username = req.body.username;
    const pass = req.body.password;

    console.log(username);
    console.log(pass);

    // Random i to x variable mess up - B.Balaj
    for (var i = 0; i < usersData.length; i++) {
        console.log(usersData[i].username)
        if (username === usersData[i].username) {
            // another oopsy const hashP = await bcrypt.compare(password, usersData[x].hashedPassword);
            const hashP = await bcrypt.compare(pass, usersData[i].hashedPassword);
            if (hashP == true) {
                req.session.user = usersData[i];
                res.redirect("/private");
                return;

                // Same Soft. Eng friend said this was not needed here since second error serves same functionality.
                // } else {
                //     res.render("layouts/login", { error: "invalid action due to wrong login" });
                //     return;
            }
        }
    }
    res.render("form", { error: "Error. Try Again." });
    // res.status(401).json({ error: "Error 401: You did not provide a valid username and/or password." });

});

module.exports = router;