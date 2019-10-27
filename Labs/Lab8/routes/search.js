const express = require('express');
const router = express.Router();
const data = require('../data');
const peopleData = data.people;

router.get('/', async(req, res) => {
    try {
        let userList = await userData.getPeople();
        res.render('information/search');
    } catch (e) {
        res.status(404).json({ error: e });
    }
});

router.post('/', async(req, res) => {
    try {
        const info = await peopleData.collectNames(req.params.personName);
        if (!personName) {
            res.status(400).json({ error: 'Missing Name' });
        }
        if (personName == '') {
            res.status(400).json({ error: 'Invalid Name' });
            return;
        }
        res.render('information/search', { personName: info });
    } catch (e) {
        res.sendstatus(400).json({ error: e });
    }
});

module.exports = router;