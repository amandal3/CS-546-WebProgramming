const express = require('express');
const router = express.Router();
const data = require('../data');
const usersData = data.users;

router.get('/logout', async(req, res) => {
    //How to get router to expire/delete session.
    //https://codeforgeek.com/manage-session-using-node-js-express-4/ 
    res.session.destroy();
    res.clearCookie("AuthCookie");
    res.render("layouts/logout");
    return;
});

module.exports = router;