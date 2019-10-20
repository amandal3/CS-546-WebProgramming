const express = require('express');
const router = express.Router();
const data = require('../data');
const postData = data.posts;
const ObjectId = require('mongodb').ObjectID;

router.get('/', async(req, res) => {
    try {
        const postList = await postData.readAll();
        res.json(postList);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.post('/', async(req, res) => {
    const blogPostData = req.body;
    console.log(blogPostData);
    try {
        const { title, content, author } = blogPostData;
        console.log("router");
        const newPost = await postData.create(title, content, author);
        console.log(newPost);

        res.json(newPost);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const post = await postData.read(req.params.id);
        res.json(post);
    } catch (e) {
        res.status(404).json({ error: 'Post not found' });
    }
});

router.put('/:id', async(req, res) => {
    const updatedData = req.body;
    console.log(updatedData);
    if (!updatedData) {
        res.status(400).json({ error: 'You must provide data to update post' });
        return;
    }
    if (!updatedData.newTitle && !updatedData.newContent) {
        res.status(400).json({ error: 'You must provide a title or content' });
        return;
    }

    try {
        const retrieve = await postData.read(req.params.id);
        console.log(retrieve);
    } catch (e) {
        res.status(404).json({ error: 'Post not found' });
    }

    try {
        const updatedPost = await postData.update(req.params.id, updatedData.newTitle, updatedData.newContent);
        res.json(updatedPost);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await postData.read(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'Post not found' });
    }
    try {
        const deletedP = await postData.delete(req.params.id);
        res.json({ deleted: 'true', data: deletedP });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
});

module.exports = router;