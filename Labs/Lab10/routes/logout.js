const express = require('express');
const router = express.Router();
const data = require('../data');
const usersData = data.users;
const session = require("express-session");

router.get('/', async(req, res) => {
    //How to get router to expire/delete session.
    //https://codeforgeek.com/manage-session-using-node-js-express-4/
    // res.session.abandon();
    // req.session = null;
    console.log(req.session);
    req.session.destroy();
    // req.session = null;
    console.log(req.session);
    res.clearCookie("AuthCookie");
    res.render("logout");
    // res.render("form");
    return;
    // req.session.destroy(() => {
    //     res
    //         .clearCookie('connect.sid', {
    //             path: '/logout',
    //             httpOnly: true,
    //         })
    //         .sendStatus(200);
    // });
});

module.exports = router;