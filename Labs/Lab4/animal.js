const mongoCollections = require('./mongoCollections');
const animals = mongoCollections.animals;

//from lecture 4: addDog
const create = async function create(name, animalType) {
    if (!name || name !== 'string') throw 'You must provide a valid name for your animal';
    if (!animalType || animalType !== 'string') throw 'You must provide an valid animalType';
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

    const animalCollection = await animals();
    const farmAnimal = await animalCollection.findOne({ _id: id });
    if (farmAnimal === null) throw 'No animal with that id';

    return farmAnimal;
}

//from lecture 4: removeDog
const remove = async function remove(id) {
    if (!id) throw 'You must provide an id to search for';

    const animalCollection = await animals();
    const deletionInfo = await animalCollection.removeOne({ _id: id });

    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete animal with id of ${id}`;
    }
}

//from lecture 4: updateDog
const rename = async function rename(id, newName) {
    if (!id) throw 'You must provide an id to search for';
    if (!newName) throw 'You must provide a new name for your animal';
    if (newName !== 'string') throw `${newName || 'second variable'} is not a string`;

    const animalCollection = await animals();
    const updatedAnimal = {
        name: newName,
        animalType: data.animalType
    };
    const updatedInfo = await animalCollection.updateOne({ _id: id }, { $set: updatedAnimal });
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