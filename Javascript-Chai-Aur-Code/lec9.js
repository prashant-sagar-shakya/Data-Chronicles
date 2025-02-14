// ============================Datatype Summary==========================

// Primitive Type
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference Type (Non- Primitive)
// Array, Objects, Functions => Return Type is function for Array and Objects but in case of fucntions return type is Function-Object

// JS is a dynamically typed language

// Symbol datatype
const id = Symbol("123");
const id2 = Symbol("123");
console.log(id === id2); // Both are not treated as same due to uniqueness provided by Symbol.

// BigInt
const bigNumber = 3456789098765432345678n;
// (number)n is a big int
console.log(bigNumber);

// Arrays => Square Brackets
const heros = ["saktiman", "krish"];
console.log(heros);

// Objects => Curly Brackets
let myObj = {
	name: "Prashant Shakya",
	age: 22,
};
console.log(myObj);

// Functions, Here we're storing out function into a varibale
const myFun = function () {
	console.log("Hello World!");
};

// typeof keyword is used to determine datatype of a variable
