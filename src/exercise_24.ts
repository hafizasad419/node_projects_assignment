// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "AND" and "OR" operators

// • Test whether an item is in an array.

// • Test whether an item is not in an array.



let user: string = "asad";
let anotherUser: string = "Saim";

if (user == anotherUser) {
    console.log(`Both Users are same.`);

} else {
    console.log(`Users are not Same`);

}//output: Users are not Same



if (true) {
    console.log("Executed");
} //this code will be executed if condition is true

if (false) {
    console.log("Executed");
} // code will be unreachable


if (2 == 2) {
    console.log("execute me");
}


let isUserLoggedIn: boolean = true;

if (isUserLoggedIn) {
    console.log(`User is logged in`);

}


// C O M P A R I S ON     O P E R A T O R S


// > , >= , < , <= , == , != , 



if (2 == 1 + 1) {
    console.log("Yes, 1+1 is  equal to 2");
}//output: true

if (2 === 2) {
    console.log("true");
} //output: true

if (6 === 3 + 2) {
    console.log("true");
} //output: false,

let temperature = 40

if (temperature < 50) {
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is more than 50");
}


let score: number = 200

if (score > 100) {
    let power = "fly"
    console.log(`User Power: ${power}`);
}

let balance: number = 1000
if (balance > 500) console.log("Blance is more than 500");
//shorthand if condition (Single Line)





let newBalance: number = 1000

if (newBalance < 500) {
    console.log("less than 500");
}

else if (newBalance < 750) {
    console.log("less than 750");
}

else if (newBalance < 950) {
    console.log("less than 950");
}

else {
    console.log("more than 950");

}


let userLoggedIn: boolean = true
let debitCard: boolean = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy");
} // both conditions must be true



let userLoggedInFromEmail: boolean = true
let userLoggedInFromGoogle: boolean = true


if (userLoggedInFromEmail || userLoggedInFromGoogle) {
    console.log("Allowed To Login");
} // any of one condition must be true


let weekDays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "", "Saturday", "Sunday"]


console.log(weekDays.includes("Monday")); //true, this array have an element "Monday" In It.


console.log(!weekDays.includes("Friday")); //true, Because this array does not contain an element "Friday".

console.log(!weekDays.includes("Monday")); //false, Because this array contain an element "Monday".










