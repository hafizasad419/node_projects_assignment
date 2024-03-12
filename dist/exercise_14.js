"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.peopleToBeInvited = void 0;
exports.peopleToBeInvited = ["Mr.Usman", "Sir Zia", "Mr.Fahad"];
exports.peopleToBeInvited.forEach((name) => {
    console.log(`Dear ${name}, I would like to invite you to dinner at my house. Please accept my invitation. Have a nice day! :)`);
});
