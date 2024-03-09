"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let PeopleToBeInvited = ["Mr.Usman", "Sir Zia", "Mr.Fahad"];
// As Mr.Fahad is not coming, I am going to replace him with Miss.Wania.
PeopleToBeInvited.pop();
PeopleToBeInvited.push("Miss Wania");
PeopleToBeInvited.forEach((name) => {
    console.log(`Dear ${name}, I would like to invite you to dinner at my house. Please accept my invitation. Have a nice day! :)`);
});
