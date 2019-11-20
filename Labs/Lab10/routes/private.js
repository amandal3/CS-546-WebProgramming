const express = require('express');
const router = express.Router();
const data = require('../data');
const usersData = data.users;
const session = require("express-session");

const authenicationChcker = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(403);
        res.render("error", { error: "authentication failed" })
        return;
    }
}

/* debugged by friend in Software Eng. Was missing authenicationChcker 
in below code so the route wasnt protected with authentication middleware. 
all users were able to see this page */

router.get('/private', authenicationChcker, async(req, res) => {
    res.render("layouts/private", req.session.user);
    return;
});

module.exports = router;