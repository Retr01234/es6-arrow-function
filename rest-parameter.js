// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);

// Extra arguments are ignored
let sumTwo = sumAll(1, 2, 3, 4, 5, 6);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += 1;
    }

    return sum;
}

let sumThree = sumRest(1, 2, 3, 4, 5, 6);