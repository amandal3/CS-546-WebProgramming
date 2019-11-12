const express = require('express');
const router = express.Router();
const data = require('../data');
const usersData = data.users;

router.get('/logout', async(req, res) => {
    req.session.destroy();
    res.clearCookie("AuthCookie");
    res.render("layouts/logout");
    return;
});

module.exports = router;