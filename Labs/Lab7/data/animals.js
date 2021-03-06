const mongoCollection = require('./mongoCollection');
const animals = mongoCollection.animals;
const pst = mongoCollection.posts;
const ObjectId = require('mongodb').ObjectID;

//from lecture 4: addDog
const create = async function create(name, animalType) {
    if (!name) throw 'You must provide a valid name for your animal';
    if (typeof name !== 'string') throw `${name || 'first variable'} is not a string`;
    if (!animalType) throw 'You must provide an valid animalType';
    if (typeof animalType !== 'string') throw `${animalType || 'second variable'} is not a string`;
    if (animalType.length === 0) throw 'You must provide at least one type of animal.';

    const pstCollect = await pst();
    const animalCollection = await animals();
    let newAnimal = {
        name: name,
        animalType: animalType,
        likes: [],
        posts: []
    };

    const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0) throw 'Could not add animal';

    const newId = insertInfo.insertedId;
    return newAnimal;
}

//from lecture 4: getAllDogs
const getAll = async function getAll() {
    const animalCollection = await animals();
    const query = await animalCollection.find({}).toArray();

    return query;
}

//from lecture 4: getDogById
const get = async function get(id) {
    if (!id) throw 'You must provide an id to search for';
    //https: //docs.mongodb.com/manual/reference/method/ObjectId.toString/
    //if (typeof ObjectId(id).toString() !== 'string') throw `${id || 'variable entered'} is not a string`;
    //Above makes no sense bc since we're converting to string, it will never throw
    if (typeof id !== 'string') throw `${id || 'variable entered'} is not a string`;

    const animalCollection = await animals();
    const farmAnimal = await animalCollection.findOne({ _id: ObjectId(id) });

    if (farmAnimal === null) throw 'No animal with that id';

    return farmAnimal;
}

//from lecture 4: removeDog
const remove = async function remove(id) {
    if (!id) throw 'You must provide an id to search for';
    if (typeof id !== 'string') throw `${id || 'variable entered'} is not a string`;

    const animalCollection = await animals();

    const ToBeDeleted = await animalCollection.findOne({ _id: ObjectId(id) });
    //const waitplz = await this.removeP(id, ToBeDeleted.author._id);
    const deletionInfo = await animalCollection.removeOne({ _id: ObjectId(id) });

    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete animal with id of ${id}`;
    }
    return ToBeDeleted;
}

//if animal is remove, all the posts need to go poof too
const removeP = async function removeP(animalID, postID) {
    if (!animalID) throw 'You must provide an id to remove';
    if (typeof animalID !== 'string') throw `${animalID || 'variable entered'} is not a string`;
    if (!postID) throw 'No postID provided';
    if (typeof postID !== 'string') throw `${postID || 'variable entered'} is not a string`;

    const animalCollection = await animals();
    //https://docs.mongodb.com/manual/reference/operator/update/pull/
    //https://docs.mongodb.com/manual/reference/operator/update/pullAll/
    //removes all matching array entry;
    const wait = await animalCollection.updateOne({ _id: animalID }, { $pull: { posts: { id: postID } } });
    return this.get(id);
}

//from lecture 4: updateDog
const rename = async function rename(id, newName) {
    if (!id) throw 'You must provide an id to search for';
    //https: //docs.mongodb.com/manual/reference/method/ObjectId.toString/
    //if (typeof ObjectId(id).toString() !== 'string') throw `${id || 'variable entered'} is not a string`;
    //Above makes no sense bc since we're converting to string, it will never throw
    if (typeof id !== 'string') throw `${id || 'first variable'} is not a string`;
    if (!newName) throw 'You must provide a valid newName for your animal';
    if (typeof newName !== 'string') throw `${newName || 'second variable'} is not a string`;

    const animalCollection = await animals();
    const updatedAnimal = {
        name: newName,
    };
    const updatedInfo = await animalCollection.updateOne({ _id: ObjectId(id) }, { $set: updatedAnimal });
    if (updatedInfo.modifiedCount === 0) {
        throw 'could not update animal successfully';
    }

    return await this.get(id);
}

const updateNameAndType = async function updateNameAndType(id, newName, newType) {
    if (!id) throw 'You must provide an id to search for';
    if (typeof id !== 'string') throw `${id || 'first variable'} is not a string`;
    if (!newName && !newType) throw 'You must provide a valid newName or newType for your animal';
    // if (!newType) throw 'You must provide a valid newName for your animal';
    const animalCollection = await animals();

    if (newName !== undefined) {
        console.log("reach newName");
        console.log(newName);
        if (typeof newName !== 'string') throw `${newName || 'second variable'} is not a string`;
        console.log("reach #2 for newName");
        const updatedName = {
            name: newName
        };

        //updates if change made in author name - Helped by B.Balaj (lines 109-112) @Gateway@1:00
        const f = await animalCollection.findOne({ _id: ObjectId(id) });
        const oldN = f.name;
        const pC = await pst();
        pC.updateMany({ 'author.name': oldN }, { $set: { 'author.name': newName } });

        var updatedInfo = await animalCollection.updateOne({ _id: ObjectId(id) }, { $set: updatedName });
    }

    if (newType !== undefined) {
        console.log("reach newType");
        console.log(newType);
        if (typeof newType !== 'string') throw `${newType || 'second variable'} is not a string`;
        console.log("reach #2 for newType");
        const updatedType = {
            animalType: newType
        };
        var updatedInfo = await animalCollection.updateOne({ _id: ObjectId(id) }, { $set: updatedType });
    }

    if (updatedInfo.modifiedCount === 0) {
        throw 'could not update animal successfully';
    }

    return await this.get(id);
}

module.exports = {
    create,
    getAll,
    get,
    remove,
    rename,
    updateNameAndType,
    removeP
};