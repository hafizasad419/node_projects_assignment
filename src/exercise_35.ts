// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

//  • Modify your program to print a statement about each animal, such as A dog would make a great pet.

//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


let animals = ["dog", "cat", "bird"];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}



for (let i = 0; i < animals.length; i++) {
    if (i === 0) {
        console.log(`${animals[i]} would make a great pet.`);
    } else if (i === 1) {
        console.log(`I Love ${animals[i]}s`);
    }
    else if (i === 2) {
        console.log(`${animals[i]}s are so lovely.`);
    }
}


// All of these animals have one thing in common that every animal can be made pet.