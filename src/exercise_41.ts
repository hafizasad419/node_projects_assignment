// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magicians: string[] = ["Harry", "John", "Carter", "Flemming"];



function show_magicians(arr: string[]) {
    arr.forEach((element: string) => {
        console.log(element);

    })
}

show_magicians(magicians)

// done, hehe 😁🤩