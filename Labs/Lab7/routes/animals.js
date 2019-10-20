const express = require('express');
const router = express.Router();
const data = require('../data');
const animalsData = data.animals;

router.get('/', async(req, res) => {
    console.log('in get request');

    try {
        const anemal = await animalsData.getAll();
        res.json(anemal);
    } catch (e) {
        res.sendStatus(500);
    }
});

router.get('/:id', async(req, res) => {
    console.log('in get id request');
    try {
        const anymal = await animalsData.get(req.params.id);
        res.json(anymal);
    } catch (e) {
        res.status(404).json({ error: 'Animal not found' });
    }
});

router.post('/', async(req, res) => {
    console.log('in post request');
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
        const newAnimal = await animalsData.create(AnimalInfo.name, AnimalInfo.animalType);
        res.json(newAnimal);
    } catch (e) {
        res.sendStatus(500);
    }
});

router.put('/:id', async(req, res) => {
    console.log('in put id request');
    const aniMal = req.body;
    console.log(req.body);

    if (!aniMal) {
        res.status(400).json({ error: 'You must provide data to update an animal' });
        return;
    }

    if (!aniMal.newName && !aniMal.newType) {
        res.status(400).json({ error: 'You must provide a name or a type' });
        return;
    }

    try {
        const retrieve = await animalsData.get(req.params.id);
        console.log(retrieve);
    } catch (e) {
        res.status(404).json({ error: 'Animal not found' });
        return;
    }

    try {
        const updatedA = await animalsData.updateNameAndType(req.params.id, aniMal.newName, aniMal.newType);
        console.log(updatedA);
        res.json(updatedA);
    } catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
});

router.delete('/:id', async(req, res) => {
    console.log('in delete id request');
    try {
        await animalsData.get(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'Animal not found' });
        return;
    }

    try {
        const deletedA = await animalsData.remove(req.params.id);
        res.json(deletedA);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
        return;
    }
});

module.exports = router;