// Destructuring arrays
let ages = [30, 26, 27];
let [john, mary, joe] = ages;

// Destructuring 
let jobs = {
    alex: "Designer",
    richard: "Developer",
    mike: "Tester"
}

let {alex, richard, mike } = jobs;

// Destructuring subsets
let languages = [
    "English",
    "German",
    "Arabic",
    "Spanish",
    "Japanese"
];

let [jaredNative, jaredSecond] = languages;
let [, , tareNative, TaraSecond] = languages;

let languagesTwo = {
    first: "English",
    second: "Spanish",
    third: "Chinese"
};

let {first, third} = languagesTwo;

// Using rest parameter syntax
let fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Orange"
];

let [favorite, secondFavorite, ...others] = fruits;