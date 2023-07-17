// No Spread Operator
let array = [1, 2, 3];
let arrayTwo = array;
arrayTwo.push(4);

// Copying an Array
let arrayThree = [4, 5, 6];
let arrayFour = [...arrayThree]; // Spread Operator ...

arrayFour.push(7);

// Copyin an Object
let object = {
    a: 1,
    b: 2,
    c: 3
};

let objectTwo = {
    ...object,
    d: 4
};

let objectThree = {
    ...object,
    b: 5
};

// Copying only parts of an array/object
let arrayFive = [
    ...array,
    {...object},
    ...arrayThree,
    "x",
    "y",
    "z"
];