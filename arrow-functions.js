// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbersTwo = (a, b) => {
    return a + b;
}

let sumTwo = addTwoNumbersTwo(3, 5);
console.log(sumTwo);

// Single Line Arrow Function With Parameters
const addTwoNumbersThree = (a, b) => a + b;

// 2nd Way to Write it:
// const addTwoNumbersThree = (a, b) => (a + b);

let sumThree = addTwoNumbersThree(3, 5);
console.log(sumThree);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Something");

const sayHello = () => console.log("Hello");
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        Multi-Line String
    </p>`
)
console.log(returnMultipleLines);