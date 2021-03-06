const mongoCollection = require('./../mongoCollection');
const animals = mongoCollection.animals;
const ObjectId = require('mongodb').ObjectID;

//from lecture 4: addDog
const create = async function create(name, animalType) {
    if (!name) throw 'You must provide a valid name for your animal';
    if (typeof name !== 'string') throw `${name || 'first variable'} is not a string`;
    if (!animalType) throw 'You must provide an valid animalType';
    if (typeof animalType !== 'string') throw `${animalType || 'second variable'} is not a string`;
    if (animalType.length === 0) throw 'You must provide at least one type of animal.';

    const animalCollection = await animals();
    let newAnimal = {
        name: name,
        animalType: animalType
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
    const deletionInfo = await animalCollection.removeOne({ _id: ObjectId(id) });

    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete animal with id of ${id}`;
    }
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
        throw 'could not update dog successfully';
    }

    return await this.get(id);
}

module.exports = {
    create,
    getAll,
    get,
    remove,
    rename
};