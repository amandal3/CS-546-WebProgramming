const express = require('express');
const router = express.Router();
const data = require('../data');
const peopleData = data.people;

router.get('/:id', async(req, res) => {
    try {
        const info = await peopleData.getPersonById(req.params.id);
        //console.log(info);
        res.render('information/details', { personName: info });
    } catch (e) {
        res.status(400).json({ error: e });
    }
});

module.exports = router;