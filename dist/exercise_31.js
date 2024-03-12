"use strict";
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users = ["Asad", "Usman", "Admin", "Wania", "Zia"];
//let's remove all elements with some fun 😁. Using a for loop.
for (let i = 0; i <= 4; i++) {
    users.pop();
}
console.log(users); //As we can see, It is empty now.
if (users.length === 0) {
    console.log(`We need to find some users.`);
}
