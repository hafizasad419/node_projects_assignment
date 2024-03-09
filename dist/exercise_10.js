"use strict";
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of program file. Then write one sentence describing what the program does.
let date = new Date(); // we are declaring a variable called `date` and assigning it the value of the current date.
let myDate = date.toLocaleDateString(); // we are declaring a variable called `myDate` and assigning it the value of the current date in a string format.
console.log(myDate); // Then We will print the value of `myDate` to the console.
// we are declaring a function called `add` that takes two numbers as parameters and returns their sum.
function add(val1, val2) {
    return val1 + val2;
}
// then we are calling the function `add` with the numbers 2 and 3 as arguments and assigning the result to the variable `result`.
let result = add(2, 3);
// And at last, we are printing the value of `result` to the console. 
console.log(result);
// This will print 5 to the console.
