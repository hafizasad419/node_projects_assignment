"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let Magicians = ["Harry", "John", "Carter", "Flemming"];
function makeGreat(arr) {
    let madeGreat = arr.map((element) => {
        return `Great ${element}`;
    });
    return madeGreat;
}
let greatMagicians = makeGreat(Magicians);
function showMagicians(arr) {
    arr.forEach((element) => {
        console.log(element);
    });
}
showMagicians(greatMagicians);
