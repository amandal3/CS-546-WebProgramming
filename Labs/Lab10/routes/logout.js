const express = require('express');
const router = express.Router();
const data = require('../data');
const usersData = data.users;
const session = require("express-session");

router.get('/', async(req, res) => {
    //How to get router to expire/delete session.
    //https://codeforgeek.com/manage-session-using-node-js-express-4/
    req.session.destroy();
    res.clearCookie("AuthCookie");
    res.render("logout");
    return;
});

module.exports = router;