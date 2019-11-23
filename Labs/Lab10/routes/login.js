const express = require('express');
const session = require("express-session")//this too
const router = express.Router();
const bcrypt = require("bcryptjs");//dont you need this
const data = require('../data');
const usersData = data.users;
const saltRounds = 16;

router.post('/', async(req, res) => {

    const username = req.body.username;
    const pass = req.body.password;
    console.log('BOYS WE MADE IT')
    console.log(username)
    console.log('RawrDood')
    for (var i = 0; i < usersData.length; i++) {//lol we had an oopsy here
        console.log(usersData[i].username)//used x in here when we using i
        if (username === usersData[i].username) {
            // another oopsy const hashP = await bcrypt.compare(password, usersData[x].hashedPassword);
            const hashP = await bcrypt.compare(pass, usersData[i].hashedPassword);
            if (hashP == true) {
<<<<<<< HEAD
                req.session.user = usersData[i];
=======
                req.session.user = usersData[i];//missed a spot here dumbo
>>>>>>> parent of 690860b... something
                res.redirect("/private");
                console.log('Rawr3')
                return;

                // Same Soft. Eng friend said this was not needed here since second error serves same functionality.
                // } else {
                //     res.render("layouts/login", { error: "invalid action due to wrong login" });
                //     return;
            }
        }
    }
<<<<<<< HEAD
    res.render("page", { error: "Error. Try Again." });
=======
    console.log('MonkaSMan');
    res.render("form", { error: "Error. Try Again." });
>>>>>>> parent of 690860b... something
});

module.exports = router;
