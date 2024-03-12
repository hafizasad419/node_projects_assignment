// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let myFavFruits: string[] = ["Strawberry", "Banana", "Apple"];



if (myFavFruits.includes("Banana")) {
    console.log(`Yeah, Banana is one of my favorite fruit.`);
}//true


if (myFavFruits.includes("Mango")) {
    console.log(`Yeah, Mango is one of my favorite fruit.`);
}//false


if (myFavFruits.includes("Strawberry")) {
    console.log(`Yeah, Strawberry is one of my favorite fruit.`);
}//true


if (myFavFruits.includes("Orange")) {
    console.log(`Yeah, Orange is one of my favorite fruit.`);
}//false


if (myFavFruits.includes("Apple")) {
    console.log(`Yeah, Apple is one of my favorite fruit.`);
}//true

