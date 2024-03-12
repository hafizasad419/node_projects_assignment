// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function makeMediumShirt(size: string = "medium",
    message: string = "I Love TypeScript"): void {
    console.log(`Shirt Size is ${size}  and "${message}" will be printed on it.`);

}

function makeLargeShirt(size: string = "large",
    message: string = "I Love TypeScript"): void {

    console.log(`Shirt Size is ${size}  and "${message}" will be printed on it.`);
}

function makeXlShirt(size: string = "XL",
    message: string = "I Love TypeScript"): void {

    console.log(`Your Shirt Size is ${size} and We will print "${message}" on it.`);
}


makeMediumShirt();
makeLargeShirt();
makeXlShirt();