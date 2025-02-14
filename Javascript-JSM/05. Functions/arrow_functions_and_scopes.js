// Arrow Functions
// const double = (x) => x * 2;
// const name = (params) => {}

// Most modern and concise way to write a function in javascript

// arrow functions can't create the 'this' value.

const square = (x) => x * x; // This arrow function is used for only one return statement, no parantheses are required.
console.log(square(5));

// Syntax of arrow function:
// const functionName = (parameters) => {};

// Parameters v/s Arguments
// Parameters are used when defining a function. They are the name that created in the function definition. It won't be accessible outside the function.
// Arguments are used when calling a function. They are the values that are passed to the function when it is called.

const sayHi = (name = "Prashant") => {
    // name is a parameter
    console.log(`Hi ${name}`);
};

sayHi(); // Default parameter of funtion is used here, the output will be Hi Prashant 
sayHi("John"); // John is an argument

// Scopes in JS:
// Why it is used scoping? => To limit the visibility of variables.
// Reason 1: Provides some secutiry to our code.
// Reason 2: It improves readability, efficiency, check bugs and reduce them.
// Reason 3: Solves the problem of naming variables.

// Three types of scope: Global, Local and Block
// Variable defined outside a function is called global scope.
// Variables defined inside a function (Functions are defined in the local scope) is called local scope.

// Block scope means that variables defined inside a block are only accessible within that block.