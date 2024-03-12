"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//Version 1
let aliencolor = "green";
if (aliencolor === "green") {
    console.log(`Player Just Earned 5 Points.`); //This will be executed
}
else if (aliencolor === "yellow") {
    console.log(`Player Just Earned 10 Points.`);
}
else if (aliencolor === "red") {
    console.log(`Player Just Earned 15 Points.`);
}
//Version 2
aliencolor = "yellow";
if (aliencolor === "green") {
    console.log(`Player Just Earned 5 Points.`);
}
else if (aliencolor === "yellow") {
    console.log(`Player Just Earned 10 Points.`); //Now, This will be executed
}
else if (aliencolor === "red") {
    console.log(`Player Just Earned 15 Points.`);
}
//Version 3
aliencolor = "red";
if (aliencolor === "green") {
    console.log(`Player Just Earned 5 Points.`);
}
else if (aliencolor === "yellow") {
    console.log(`Player Just Earned 10 Points.`);
}
else if (aliencolor === "red") {
    console.log(`Player Just Earned 15 Points.`); //Now, This will be executed
}
