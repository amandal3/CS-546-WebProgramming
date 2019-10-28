const express = require('express');
const router = express.Router();
const data = require('../data');
const peopleData = data.people;

router.get('/:id', async(req, res) => {
    try {
        const info = await peopleData.getPersonById(parseInt(req.params.id));
        console.log(info);
        res.render('information/details', info);
    } catch (e) {
        res.render('information/details');
    }
});

module.exports = router;