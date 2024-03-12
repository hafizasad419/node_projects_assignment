// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


let pizzaArray: string[] = ["Crown Crust", "Chicken Tikka Pizza", "Cheese Special Pizza"];


for (let i = 0; i <= 2; i++) {
    console.log(pizzaArray[i]);
}


// another loop, with additional sentence.

for (let i = 0; i <= 2; i++) {
    if (i === 0) {
        console.log(`${pizzaArray[i]} is my favorite pizza.`);
    }
    else if (i === 1) {
        console.log(`${pizzaArray[i]} is not my favorite pizza.`);
    }
    else if (i === 2) {
        console.log(`I like ${pizzaArray[i]} As well.`);
    }
}


// "I Like Margherita, also the boldness of Pepperoni, and appreciate the wholesome goodness of Vegetarian pizza. The Taste of BBQ Chicken tops my list. Pizza, with its gooey cheese, crispy crust, and diverse toppings, is a perpetual joy. In every slice, I find a lot of  of flavors that brings sheer delight. I really love pizza!"
