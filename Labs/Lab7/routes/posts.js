const express = require('express');
const router = express.Router();
const data = require('../data');
const postData = data.posts;

router.get('/', async(req, res) => {
    try {
        const postList = await postData.get();
        res.json(postList);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.post('/', async(req, res) => {
    const blogPostData = req.body;
    try {
        const { title, content, authorID } = blogPostData;
        const newPost = await postData.create(title, content, authorID);

        res.json(newPost);
        res.sendStatus(200);
    } catch (e) {
        res.status(400).json({ error: e });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const post = await postData.get(req.params.id);
        res.json(post);
        res.sendStatus(200);
    } catch (e) {
        res.status(404).json({ error: 'Post not found' });
    }
});

router.put('/:id', async(req, res) => {
    const updatedData = req.body;
    if (!updatedDate) {
        res.status(400).json({ error: 'You must provide data to update post' });
        return;
    }

    if (!updatedDate.title) {
        res.status(400).json({ error: 'You must provide a title' });
        return;
    }

    if (!aniMal.content) {
        res.status(400).json({ error: 'You must provide content' });
        return;
    }

    try {
        await postData.get(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'Post not found' });
    }

    try {
        const updatedPost = await postData.update(req.params.id, updatedData);
        res.json(updatedPost);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await postData.get(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'Post not found' });
    }
    try {
        await postData.remove(req.params.id);
        res.json({ deleted: 'ok' });
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

module.exports = router;