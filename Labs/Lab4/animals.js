const mongoCollection = require('./mongoCollection');
const animals = mongoCollection.animals;
const ObjectId = require('mongodb').ObjectID;

//from lecture 4: addDog
const create = async function create(name, animalType) {
    if (!name || name !== 'string') throw 'You must provide a valid name for your animal';
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
    const farm = await this.get(newId);
    return farm;
}

//from lecture 4: getAllDogs
const getAll = async function getAll() {
    const animalCollection = await animals();
    const animals = await animalCollection.find({}).toArray();

    return animals;
}

//from lecture 4: getDogById
const get = async function get(id) {
    if (!id) throw 'You must provide an id to search for';
    if (typeof id !== 'string') throw `${id || 'variable entered'} is not a string`;

    const objectConv = ObjectID(id);
    const animalCollection = await animals();
    const farmAnimal = await animalCollection.findOne({ _id: objectConv });

    if (farmAnimal === null) throw 'No animal with that id';

    return farmAnimal;
}

//from lecture 4: removeDog
const remove = async function remove(id) {
    if (!id) throw 'You must provide an id to search for';
    if (typeof id !== 'string') throw `${id || 'variable entered'} is not a string`;

    const objectConv = ObjectID(id);
    const animalCollection = await animals();
    const deletionInfo = await animalCollection.removeOne({ _id: objectConv });

    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete animal with id of ${id}`;
    }
}

//from lecture 4: updateDog
const rename = async function rename(id, newName) {
    if (!id) throw 'You must provide an id to search for';
    if (typeof id !== 'string') throw `${id || 'first variable'} is not a string`;
    if (!newName) throw 'You must provide a valid newName for your animal';
    if (typeof newName !== 'string') throw `${newName || 'second variable'} is not a string`;

    const objectConv = ObjectID(id);
    const animalCollection = await animals();
    const updatedAnimal = {
        name: newName,
        animalType: data.animalType
    };
    const updatedInfo = await animalCollection.updateOne({ _id: objectConv }, { $set: updatedAnimal });
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