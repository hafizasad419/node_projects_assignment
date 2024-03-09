// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



let AllPeopleToBeInvited = ["Mr.Usman", " Sir Zia", " Miss Wania"];

AllPeopleToBeInvited.unshift("Mr.Ibtisaam"); //new guest to the beginning of array.

AllPeopleToBeInvited.splice(2, 0, "Mr.Ali"); //new guest to the middle of array.    

AllPeopleToBeInvited.push("Mr.Ahmad"); //new guest to the end of array.





// Shrinking Guest List
console.log(`Sorry ${AllPeopleToBeInvited[5]}, We Can Not Invite You To Dinner.`);

AllPeopleToBeInvited.pop();



console.log(`Sorry ${AllPeopleToBeInvited[4]}, We Can Not Invite You To Dinner.`);

AllPeopleToBeInvited.pop();



console.log(`Sorry ${AllPeopleToBeInvited[3]}, We Can Not Invite You To Dinner.`);

AllPeopleToBeInvited.pop();



console.log(`Sorry ${AllPeopleToBeInvited[2]}, We Can Not Invite You To Dinner.`);

AllPeopleToBeInvited.pop();






AllPeopleToBeInvited.forEach((name) => {
    console.log(`Dear ${name}, I would like to invite you to inform you that you are still invited to dinner at my house. Please accept my invitation. Have a nice day! :)`);




})





AllPeopleToBeInvited.shift()
AllPeopleToBeInvited.pop()



console.log(AllPeopleToBeInvited);  // Empty List


