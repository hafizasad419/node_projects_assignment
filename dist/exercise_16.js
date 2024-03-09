"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
let allPeopleToBeInvited = ["Mr.Usman", " Sir Zia", " Miss Wania"];
console.log(`Hey ${allPeopleToBeInvited}, We found a bigger Table Now.`);
allPeopleToBeInvited.unshift("Mr.Ibtisaam"); //new guest to the beginning of array.
allPeopleToBeInvited.splice(2, 0, "Mr.Ali"); //new guest to the middle of array.    
allPeopleToBeInvited.push("Mr.Ahmad"); //new guest to the end of array.
allPeopleToBeInvited.forEach((name) => {
    console.log(`Dear ${name}, I would like to invite you to dinner at my house. Please accept my invitation. Have a nice day! :)`);
    // console.log(name);
});
