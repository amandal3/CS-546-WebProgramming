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
        console.log("router place");
        console.log(req.body.personName);
        const info = await peopleData.collectNames(req.body.personName);
        console.log("HELLO WORLD");
        //console.log(info);
        if (!req.body.personName) {
            //res.status(400).json({ error: 'Missing Name' });
            res.status(400).render('information/search');
            return;
        }
        console.log('Oink');
        if (req.body.personName == '') {
            //res.status(400).json({ error: 'Invalid Name' });
            res.status(400).render('information/search');
            return;
        }
        console.log('Moo')
        res.render('information/search', { personName: info });
        console.log('Quack')
    } catch (e) {
        console.log('Yoink');
        console.log(e);
        res.status(400).json({ error: e });
    }
});

module.exports = router;