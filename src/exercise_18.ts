// // Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



// L E T 'S       S T A R T

let myArray: string[] = ["Lahore", "Karachi", "Islamabad", "Peshawar", "Quetta", "Gilgit"];
console.log(myArray); //It is in In Original Order.



let sortedArray: string[] = myArray.slice().sort();
console.log(sortedArray); //Sorting without changing the original Array.


console.log(myArray); //As You can see, It is still in in original order.

let reversedArray: string[] = myArray.slice().sort().reverse();
console.log(reversedArray); //reversed without changing the original Array.


console.log(myArray); //As You can see Again, It is still in in original order.



// Now, changing the original list. 
const originalArray: string[] = [...myArray];
myArray = myArray.slice().sort().reverse()

console.log(myArray);


myArray = originalArray;
console.log(myArray);  // Now, It is back in its original order.


myArray = myArray.slice().sort();
console.log(myArray); // Now, It is in alphabetical order.;


myArray = myArray.slice().sort().reverse();
console.log(myArray); // Now, It is in reverse alphabetical order. 



// That was fun. 😁👌🏻














