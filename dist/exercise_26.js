"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block
let alienColor = "green";
if (alienColor === "green") {
    //following will be executed
    console.log(`Player Just Earned 5 Points For Shooting The Alien.`);
}
else if (alienColor !== "green") {
    console.log(`Player Just Earned 10 Points.`);
}
let newAlienColor = "red";
if (newAlienColor === "blue") {
    console.log(`Player Just Earned 1 Points.`);
}
else if (newAlienColor === "green") {
    console.log(`Player Just Earned 10 Points.`);
}
else {
    console.log(`Player Just Earned 15 Points.`); //Now, This will be executed
}
