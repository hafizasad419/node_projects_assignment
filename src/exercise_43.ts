// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



let myMagicians: string[] = ["Harry", "John", "Carter", "Flemming"];


function makeMagGreat(arr: string[]) {
    let madeGreat = arr.map((element: string,) => {
        return `Great ${element}`
    })

    return [madeGreat, arr]

}

let [myGreatMagicians, originalMagicians] = makeMagGreat(myMagicians);



function showMyMagicians(arr: string[]) {
    arr.forEach((element: string) => {
        console.log(element);

    })
}

showMyMagicians(originalMagicians) //Original Array
showMyMagicians(myGreatMagicians)//Array with 'Great' Added to each magician.



