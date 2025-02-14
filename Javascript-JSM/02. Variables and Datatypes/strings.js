// String
const singleQuote = "Hello World!";
console.log(singleQuote);

const doubleQuote = "Hello World!!";
console.log(doubleQuote);

// In javascript, we can use single or, double quotes or, backtick to create a string

// Creating a string using backtick
const backTick = `Hello World!!!`;
console.log(backTick);

// backtick string also allows us to use variables and expressions by using ${variableName} inside the string
const name = "John";
// using name varibale in the string by using backtick
const backTickString = `Hello, ${name}, welcome`;
console.log(backTickString);

// we can find data type of a variable by using typeof keyword
console.log(typeof backTickString); // string