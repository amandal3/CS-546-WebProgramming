const mongoCollection = require('./mongoCollection');
const posts = mongoCollection.posts;
const mals = mongoCollection.animals;
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
        const post = await postCollection.findOne({ _id: ObjectId(id) });

        if (post === null || !post) throw "Post not Found";
        return post;
    },

    async create(title, content, authorID) {
        if (!title) throw 'You must provide a title';
        if (typeof title !== 'string') throw 'Invalid title provided';
        if (!content) throw 'You must provide content';
        if (typeof content !== 'string') throw 'Invalid content provided';
        if (!authorID) throw 'You must provide an author';
        if (typeof authorID !== 'string') throw 'Invalid author provided';

        const postCollection = await posts();
        const animalsThatPosted = await animals.get(authorID);
        console.log(animalsThatPosted);

        const newPost = {
            title: title,
            content: content,
            author: {
                _id: authorID,
                name: animalsThatPosted.name
            },
        };

        const newInsertInformation = await postCollection.insertOne(newPost);
        if (newInsertInformation.insertedCount === 0) throw 'Could not add post';
        console.log('BREAK');
        console.log(newInsertInformation);

        var newId = newInsertInformation.insertedId;

        //waits for refresh 
        const holder = await this.refreshCreate(newId, authorID, title);
        return await holder;
    },

    //to update the get animals after creating posts
    async refreshCreate(id, aId, tle) {
        const newaID = ObjectId(aId);
        const aCollec = await mals();

        const up = {
            _id: id,
            title: tle
        };
        //https://docs.mongodb.com/manual/reference/operator/update/addToSet/
        const UpdatedCreate = aCollec.updateOne({ _id: newaID }, { $addToSet: { posts: up } })
        if (UpdatedCreate.modifiedCount === 0) {
            throw 'could not successfully update';
        }
        return await this.read(id);
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
        const ToBeDeleted = await postCollection.findOne({ _id: ObjectId(id) });
        const deletionInfo = await postCollection.removeOne({ _id: ObjectId(id) });
        if (deletionInfo.deletedCount === 0) throw 'Could not delete post';
        return ToBeDeleted;
    },

    async update(id, newTitle, newContent) {
        if (!id) throw 'You must provide an id to search for';
        if (typeof id !== 'string') throw `${id || 'first variable'} is not a string`;
        if (!newTitle && !newContent) throw 'You must provide a valid newTitle or newContent for your post';
        const postCollection = await posts();
        const srch = await postCollection.findOne({ _id: ObjectId(id) });
        if (newTitle !== undefined) {
            console.log("reach Title");
            console.log(newTitle);
            if (typeof newTitle !== 'string') throw `${newTitle || 'second variable'} is not a string`;
            console.log("reach #2 for title");
            const updatedTitle = {
                title: newTitle
            };
            var updatedInfo = await postCollection.updateOne({ _id: ObjectId(id) }, { $set: updatedTitle });
            console.log(srch);
            const pause = await this.extra(srch.title, newTitle, srch.author._id);
        }

        if (newContent !== undefined) {
            console.log("reach content");
            console.log(newContent);
            if (typeof newContent !== 'string') throw `${newType || 'second variable'} is not a string`;
            console.log("reach #2 for content");
            const updatedContent = {
                content: newContent
            };
            var updatedInfo = await postCollection.updateOne({ _id: ObjectId(id) }, { $set: updatedContent });
        }
        if (updatedInfo.modifiedCount === 0) {
            throw 'could not update post successfully';
        }

        return await this.read(id);
    },

    //updating post if and updated happened
    async extra(oldT, newT, aID) {
        console.log('REACHED');
        const aCollec = await mals();
        console.log(aID);
        const search = await aCollec.findOne({ _id: ObjectId(aID) });
        console.log(search);
        let i = 0;
        console.log(oldT);
        console.log(newT);
        //Helped from B.Balaj
        for (i; i < search.posts.length; i++) {
            console.log(search.posts[i].title);
            if (search.posts[i].title === oldT) {
                search.posts[i].title = newT;
            }
        }
        console.log(search.posts);
        const something = await aCollec.updateOne({ _id: ObjectId(aID) }, { $set: { posts: search.posts } })
        return something;
    }
};

module.exports = exportedMethods;