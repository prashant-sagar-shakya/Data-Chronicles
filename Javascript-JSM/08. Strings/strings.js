// Strings in JavaScript is a primitive data type.
const single = "this is a string"; // It has limitations we can add apostrophe or any other escape character by using \(escape character) only
const double = "this is a string";
let backticks = `this is a string`; // it can also embed variables by using ${variable}
backticks = `2 + 2 = ${2 + 2}`;

console.log(single);
console.log(double);
console.log(backticks);

console.log(typeof single);
console.log(typeof double);
console.log(typeof backticks);

// String length and basic properties
const name = "John";
console.log(name.length);

// Accesing a certain character from string
console.log(name[0], name[name.length - 1]);

// Changing String Case: Uppercase & Lowercase
const mixedCaseString = "This is A sTring";
// toLowerCase() & toUpperCase() methods, these methods are immutable which means they will not change the original string

console.log(mixedCaseString.toLowerCase());
console.log(mixedCaseString.toUpperCase());

// Search for a substring in a string
// indexOf() & lastIndexOf() methods
const searchString = "this is a string";

console.log(searchString.indexOf("is")); // 2 from this
console.log(searchString.lastIndexOf("is")); // 5 from is
// It returns -1 if the substring is not found in the string

// Checking the string contains a substring or not by using includes() method, it returns a boolean value
console.log(searchString.includes("is")); // true
console.log(searchString.includes("is not")); // false

// startsWith() & endsWith() methods
console.log(searchString.startsWith("this")); // true
console.log(searchString.startsWith("hi")); // false
console.log(searchString.endsWith("string")); // true
console.log(searchString.endsWith("this")); // false

// Getting a substring from a string
// slice() method
const exampleString = "I am a String";
const sliced = exampleString.slice(3, 6); // First included & Second excluded, if we not pass the last param then it gonna slice till end of the string
console.log(sliced);

// Spilliting a string into multiple substrings
// split() method
const St = "Prashant";
console.log(St.split("")); // "" is the separatoror, splitter; split the string in an array

// Spilliting a sentence into words
const St2 = "A quick brown fox jumps over the lazy dog";
console.log(St2.split(" ")); // Splitter is an empty space now.

// Reverse, Repeat and Trim a String
const St3 = "test";
// Reversing the string
console.log(St3.split("").reverse().join("")); // tset
// Here first we split the string as an array of characters as ['t', 'e', 's', 't'] and then reverse the array ['t', 's', 'e', 't'] and then join the array into a string 'tset'
// join is used to join an array into a string, for join "" is jointer

// Repeat a string
console.log("Hello".repeat(3)); // HelloHelloHello

// Trim a string, trim() method; it removes the empty spaces from the beginning and the end of the string
console.log("       Hello       ".trim()); // Hello