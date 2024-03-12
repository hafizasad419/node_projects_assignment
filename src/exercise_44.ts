// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function makeSandwich(...ingredients: string[]) {
    console.log("This Sandwich is made by following tasty items:");
    for (const ingredient of ingredients) {
        console.log(ingredient);
    }
    console.log("\n");
}

makeSandwich("bread", "cheese", "lettuce", "turkey");
makeSandwich("bread", "ham", "mayo");
makeSandwich("baguette", "salami", "cheese", "tomato", "lettuce");

