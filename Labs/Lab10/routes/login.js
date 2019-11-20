const express = require('express');
const router = express.Router();
const data = require('../data');
const usersData = data.users;

router.post('/login', async(req, res) => {

    const username = req.body.username;
    const pass = req.body.password;

    for (var i = 0; i < data.length; i++) {
        if (username === data[x].username) {
            const hashP = await bcrypt.compare(password, data[x].hashedPassword);
            if (hashP == true) {
                req.session.user = data[i];
                res.redirect("/private");
                return;

                // Same Soft. Eng friend said this was not needed here since second error serves same functionality.
                // } else {
                //     res.render("layouts/login", { error: "invalid action due to wrong login" });
                //     return;
            }
        }
    }
    res.render("layouts/main", { error: "Error. Try Again." });
});

module.exports = router;