const express = require('express');
const router = express.Router();
const data = require('../data');
const animalsData = data.animals;

router.get('/', async(req, res) => {
    console.log('in get request');
    try {
        const anemal = await userData.getAll();
        res.json(anemal);
    } catch (e) {
        res.sendStatus(500);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const anymal = await animalsData.get(req.params.id);
        res.json(anymal);
    } catch (e) {
        res.status(404).json({ error: 'Animal not found' });
    }
});

router.post('/', async(req, res) => {
    const AnimalInfo = req.body;

    if (!AnimalInfo) {
        res.status(400).json({ error: 'You must provide data to create animal' });
        return;
    }

    if (!AnimalInfo.name) {
        res.status(400).json({ error: 'You must provide a name' });
        return;
    }

    if (!AnimalInfo.animalType) {
        res.status(400).json({ error: 'You must provide a type' });
        return;
    }

    try {
        const newAnimal = await animalsData.addUser(userInfo.name, userInfo.animalType);
        res.json(newAnimal);
    } catch (e) {
        res.sendStatus(500);
    }
});

router.put('/:id', async(req, res) => {
    const aniMal = req.body;

    if (!aniMal) {
        res.status(400).json({ error: 'You must provide data to update an animal' });
        return;
    }

    if (!aniMal.name) {
        res.status(400).json({ error: 'You must provide a name' });
        return;
    }

    if (!aniMal.animalType) {
        res.status(400).json({ error: 'You must provide a type' });
        return;
    }

    try {
        await animalsData.get(req.params.id);
        res.sendStatus(200);
    } catch (e) {
        res.status(404).json({ error: 'Animal not found' });
        return;
    }

    try {
        const updatedA = await animalsData.rename(req.params.id, aniMal);
        res.json(updatedA);
    } catch (e) {
        res.sendStatus(500);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await animalsData.get(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'Animal not found' });
        return;
    }

    try {
        await animalsData.remove(req.params.id);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
        return;
    }
});

module.exports = router;