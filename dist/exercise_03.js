"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let myName = "Asad";
console.log(myName.toLowerCase()); // Lower Case
console.log(myName.toUpperCase()); // Upper Case
// it is already in title case, so let's redefine it.
myName = "asad";
let myNameInTitleCase = myName.charAt(0).toUpperCase() + myName.slice(1);
console.log(myNameInTitleCase);
