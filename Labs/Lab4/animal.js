const mongoCollections = require('./mongoCollections');
const animals = mongoCollections.animals;

const create = async function create(name, animalType) {

}

const getAll = async function getAll() {
    const animalCollection = await animals();

    const animals = await animalCollection.find({}).toArray();

    return animals;
}

const remove = async function remove(id) {
    if (!id) throw 'You must provide an id to search for';

    const animalCollection = await animals();
    const deletionInfo = await animalCollection.removeOne({ _id: id });

    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete dog with id of ${id}`;
    }
}



module.exports = {
    create,
    getAll,
    remove,
};