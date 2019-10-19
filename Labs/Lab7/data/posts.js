const mongoCollections = require('./mongoCollections');
const posts = mongoCollections.posts;
const animals = require('./animals');
const ObjectId = require('mongodb').ObjectID;

const exportedMethods = {
    async readAll() {
        const postCollection = await posts();
        return await postCollection.find({}).toArray();
    },

    async read(id) {
        if (!id) throw "You must provide an id to search for";

        const postCollection = await posts();
        const post = await postCollection.findOne({ _id: id });

        if (post === null || !post) throw "Post not Found";
        return post;
    },

    async create(title, content, authorID) {
        if (!title) throw 'You must provide a title';
        if (typeof title !== 'string') throw 'Invalid title provided';
        if (!authorID) throw 'You must provide an author';
        if (typeof authorID !== 'string') throw 'Invalid author provided';
        if (!content) throw 'You must provide content';
        if (typeof content !== 'string') throw 'Invalid content provided';

        const postCollection = await posts();
        const animalsThatPosted = await animals.get(authorID);

        const newPost = {
            title: title,
            content: content,
            author: {
                _id: ObjectId(authorID),
                name: animalsThatPosted.name
            },
        };
        const newInsertInformation = await postCollection.insertOne(newPost);
        const newId = newInsertInformation.insertedId;

        return await this.read(newId);
    },

    async delete(id) {
        const postCollection = await posts();
        let post = null;
        try {
            post = await this.read(id);
        } catch (e) {
            console.log(e);
            return;
        }
        const deletionInfo = await postCollection.removeOne({ _id: id });
        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete post with id of ${id}`;
        }
    },

    async update(id, updatedPost) {
        const postCollection = await posts();

        const updatedPostData = {};

        if (updatedPost.title) {
            updatedPostData.title = updatedPost.title;
        }

        if (updatedPost.content) {
            updatedPostData.content = updatedPost.content;
        }

        await postCollection.updateOne({ _id: id }, { $set: updatedPostData });

        return await this.read(id);
    }
};

module.exports = exportedMethods;