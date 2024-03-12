"use strict";
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let username = "Asad";
let userage = 20;
let usergender = "male";
let usercity = "Islamabad";
let userIsLoggedIn = true;
const userid = 112;
let userBalance = 2000;
let lastLoginDay = "Saturday";
let userIsPaid = false;
let userIsVerified = false;
console.log(username === "Asad" ? `User Is Asad` : `User Is Someone else`);
console.log(username === "Asad"); //true
console.log(userage === 20 ? `User age Is 20` : `User Age Is not 20.`);
console.log(userage === 20); //true
console.log(usergender === "male" ? `User Is male` : `User Gender is not male.`);
console.log(usergender === "male"); //true
console.log(usercity === "Islamabad" ? `User's City Is Islamabad` : `User's City Is Not Islamabad.`);
console.log(usercity === "Islamabad"); //true
console.log(userIsLoggedIn ? `User Is Logged In` : `User Is not Logged In `);
console.log(userIsLoggedIn); //true
console.log(userid === 21 ? "true" : `I Predict False`);
console.log(userid === 21); //false
console.log(userBalance === 2100 ? "true" : `I Predict False`);
console.log(userBalance === 2100); //false
console.log(lastLoginDay === "Sunday" ? "true" : `I Predict False`);
console.log(lastLoginDay === "Sunday"); //false
console.log(userIsPaid ? "true" : `I Predict False`);
console.log(userIsPaid); //false
console.log(userIsVerified ? "true" : `I Predict False`);
console.log(userIsVerified); //false
