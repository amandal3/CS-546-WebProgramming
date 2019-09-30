const animals = require('./data/animals');
const connection = require('./mongoConnections');
const collection = require('./mongoCollection');
const database = collection.animals;

async function main() {
    const db = await connection();
    let Sasha = undefined;
    let Lucy = undefined;
    let Duke = undefined;
    console.log('               Animal Farm')
    console.log('=========================================')
    try {
        // Create an animal named Sasha with the type of Dog
        Sasha = await animals.create('Sasha', 'Dog');
        console.log('Sasha was created...');

        // Log the newly created animal
        console.log(Sasha);
        console.log('Sasha inserted...\n');
    } catch (e) {
        console.log(e);
    }
    try {
        // Create an animal named Lucy, with the type of Dog
        Lucy = await animals.create('Lucy', 'Dog');
        console.log('Lucy was created...\n');
    } catch (e) {
        console.log(e);
    }
    try {
        // Query all animals, and log them all
        console.log('Querying all animals...')
        const allMyAnimals = await animals.getAll();
        console.log(allMyAnimals);
        console.log('Query done!\n');
    } catch (e) {
        console.log(e);
    }
    try {
        // Create an animal named Duke, with a type of Walrus
        Duke = await animals.create('Duke', 'Walrus');
        console.log('Duke was created...');

        // Log the newly created Duke
        console.log(Duke);
        console.log('Duke inserted...\n');
    } catch (e) {
        console.log(e);
    }
    try {
        // Rename Sasha to Sashita
        console.log('Lets rename Sasha...');
        const Sashita = await animals.rename(String(Sasha._id), 'Sashita');
        console.log('rename done');

        // Log the newly named Sashita
        console.log(Sashita);
        console.log('Hello Sashita\n');
    } catch (e) {
        console.log(e);
    }
    try {
        // Remove Lucy
        console.log('Someone found a new home...');
        const removeLucy = await animals.remove(String(Lucy._id));
        console.log('Bye bye Lucy\n');

    } catch (e) {
        console.log(e);
    }
    try {
        // Query all animals, and log them all
        console.log('Query2...');
        const allAnimals = await animals.getAll();
        console.log(allAnimals);
        console.log('Query2 done\n');
    } catch (e) {
        console.log(e);
    }
    await db.serverConfig.close();
}


//call main
main()