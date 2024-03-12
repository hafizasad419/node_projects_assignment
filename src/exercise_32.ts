// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let current_users: string[] = ["Asad", "Zia", "Usman", "Wania", "Fahad"];

let new_users: string[] = ["Ahmad", "Usman", "Rehan", "asad", "Kamran"];


new_users.map((username) => {
    if (current_users.includes(username)
        || current_users.includes(username.toUpperCase())
        || current_users.includes(username.toLowerCase())
        || current_users.includes(username.charAt(0).toUpperCase() + username.slice(1))) {

        console.log(`You need to enter a new username because ${username} has already taken.`);
    }

    else {
        console.log(`Username ${username} is available.`);
    }
})

