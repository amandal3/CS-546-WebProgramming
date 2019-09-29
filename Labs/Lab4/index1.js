const animals = require('./animals');
const connection = require('./mongoConnections');
const collection = require('./mongoCollection');
const database = collection.animals;

const main = async() => {

    const db = await connection();

    // Create an animal named Sasha with the type of Dog
    const Sasha = await animals.create('Sasha', 'Dog');
    console.log('Sasha was created...');

    // Log the newly created animal
    console.log(Sasha);
    console.log('Sasha inserted...\n');

    // Create an animal named Lucy, with the type of Dog
    const Lucy = await animals.create('Lucy', 'Dog');
    console.log('Lucy was created...\n');

    // Query all animals, and log them all
    console.log('Querying all animals...')
    const allMyAnimals = await animals.getAll();
    console.log(allMyAnimals);
    console.log('Query done!\n');

    // Create an animal named Duke, with a type of Walrus
    const Duke = await animals.create('Duke', 'Walrus');
    console.log('Duke was created...');

    // Log the newly created Duke
    console.log(Duke);
    console.log('Duke inserted...\n');

    // Rename Sasha to Sashita
    console.log('Lets rename Sasha...');
    const Sashita = await animals.rename(Sasha._id, 'Sashita');
    console.log('rename done');

    // Log the newly named Sashita
    console.log(Sashita);
    console.log('Hello Sashita');

    // Remove Lucy
    console.log('Someone found a new home...');
    const removeLucy = await animals.remove(Lucy._id);
    console.log('Bye bye Lucy');

    // Query all animals, and log them all
    console.log('Query2...');
    const allAnimals = await animals.getAll();
    console.log(allAnimals);
    console.log('Query2 done');

    await db.serverConfig.close();

}

//call main
main().catch((error) => {
    console.log(error);
});