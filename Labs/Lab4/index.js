const animals = require('./animals');
const connection = require('./mongoConnection');


async function main() {
    // Create an animal named Sasha with the type of Dog
    const Sasha = await animals.create("Sasha", "Dog");

    // Log the newly created animal
    console.log(Sasha);

    // Create an animal named Lucy, with the type of Dog
    const Lucy = await animals.create("Lucy", "Dog");

    // Query all animals, and log them all
    const allMyAnimals = await animals.getAll();
    console.log(allMyAnimals);

    // Create an animal named Duke, with a type of Walrus
    const Duke = await animals.create("Duke", "Walrus");

    // Log the newly created Duke
    console.log(Duke);

    // Rename Sasha to Sashita
    const Sashita = await animals.rename(sasha._id, "Sashita");

    // Log the newly named Sashita
    console.log(Sashita);

    // Remove Lucy
    const removeLucy = await animals.remove(lucy._id);

    // Query all animals, and log them all
    const allAnimals = await animals.getAll();
    console.log(allAnimals);
}


//call main
main()