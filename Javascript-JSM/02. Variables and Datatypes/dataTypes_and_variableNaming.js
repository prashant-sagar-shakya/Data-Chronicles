// Creating a variable
var variableName = "Welcome to Variables";
// var has a global scope, these variables can be accessed from anywhere in the code
console.log(variableName);

// we can not create two variables with the same name for e.g. var variableName = "Hello";

// we cannot create a variable by putting keywords as variable name. for e.g var if = "Hello";

// After ES6, we can use let and const for creating variables
const variableName2 = "Welcome to ES6 Variables";
console.log(variableName2);

// const variables cannot be changed for e.g. variableName2 = "Hello";
// let's execute the code below

variableName2 = "Hello";
console.log(variableName2);
// It gives an error as const variables cannot be changed

// Creating a variable using let
let variableName3 = "Welcome to Let Variables";
console.log(variableName3);

// Rules of creating variables in javascript:

// Always starts with a letter or, _ or, $
// no spacing is allowed on naming a variable
// never starts with a number
// variable naming are case sensitive


// Data types in javascript:
// String, Number, Boolean, null, undefined, object
// only the object is non - primitive data type in javascript
// In javascript null means, non existing value
// undefined means, value is not defined

// Comments in javascript are improve the readability of the code,
// Single line comment
/* Multi line comment*/