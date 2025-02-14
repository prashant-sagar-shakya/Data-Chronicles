// functions in javascript are a block of code that performs a specific task
// functions are reusable blocks of code that perform a specific task, and can be called multiple times throughout a program.

// A function has two parts: Function Call (Calling or executing a Function) & Function Declaration (Defining a Function)

// Function Declaration
function square(number) {
    // Number is parameter of this function
    return number * number;
}

// Function Call
const result = square(5); // 5 is argument passed in the function
console.log(result);

// Function Declaration defines a named function as here square is a function name
function name(params) {
    // statements
    // This function declaration have access to "this" keyword
}

// A function expression is a function that is defined in the same line as it is being declared.
// Anonymous functions are functions that do not have names.
const names = function (params) {
    // statements
    // This is an anonymous function
};

// Arrow Function: Recommended to use
// It has a shorter syntax to declare a function
const Names = (params) => {
    // statements
};

// There are three ways of creation of a function

// A function is executed when it is called.
// We can invoke a function by using its name followed by a pair of parentheses ().

// for the above arrow function calling is like name()

function sayHi(Name) {
    console.log(`Hi ${Name}`);
}

sayHi("John");

// Every function in javascriipt returns undefined unless otherwise specified

function add(a, b) {
    // if a return statement is already declared then rest of the code will not be executed.
    return a + b;
}

const sum = add(2, 3);
console.log(sum);

// The return statement cannot only returns the value, it can also be assignable to a variable.

function test() {
    return true;
    return false; // this never gets executed as it is a dead code
}

const bool = test();
console.log(bool);