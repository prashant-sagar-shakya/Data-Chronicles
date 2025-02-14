// Hoisting in JavaScript
// It is a process of moving all declarations to the top of the scope before code execution.

console.log(age); // undefined
var age = 25;

// Hoisting behind this scene:
var age;
console.log(age); //which gives us undefined
age = 25; // Now assignment of value to variable age
// NOTE: const, let and modern function declaration types(Arrow functions) cannot be hoisted, they throw an uncaught error.

// Hoisting in Functions
sayHi(); // Gives Hello
function sayHi() {
    console.log("Hello");
}