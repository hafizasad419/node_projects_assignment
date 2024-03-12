// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface Car {
    manufacturer: string
    modelName: string
    color?: string
}


class createCar implements Car {
    constructor(
        public manufacturer: string,
        public modelName: string,
        public color?: string
    ) {

    }
}

let myCar = new createCar("Honda", "Civic");
let coachCar = new createCar("Toyota", "Supra mk4", "white");

console.log(myCar);
console.log(myCar.modelName);
console.log(myCar.manufacturer);


console.log(coachCar);
console.log(coachCar.modelName);
console.log(coachCar.manufacturer);
console.log(coachCar.color);


