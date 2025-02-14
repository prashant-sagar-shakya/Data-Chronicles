// ========================Strings in JS=========================

const name = "Prashant";
const repoCount = 50;

// Outdated Concatenation
// console.log(name + repoCount + " Value"); // Concatenation

// console.log(`Hello my name is ${name} and my repo is ${repoCount} Value`) // String interpollation

// declaring a string using objects
const gameName = new String("My_name");
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__); // {} tells prototype is object
// console.log(gameName.length); //7
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4)); //a
// console.log(gameName.indexOf('a')) //4

const newString = gameName.substring(0, 4);
// console.log(newString); // My n (it is like python, 0 included 4 excluded => [) )

let anotherString = gameName.slice(0, 4);
// console.log(anotherString)

anotherString = gameName.slice(-7, 3);
// console.log(anotherString);

// Trim, Replace & Includes
const newString1 = "         Prashant        ";
// console.log(newString1);

// Trim Method
// console.log(newString1.trim()); // Removes the white spaces from the string
// trim start & end also exists

const url = "https://google.com/prashant%20Shakya";

// Replace Method
const New = url.replace("%20", "");
// console.log(New);

// includes method => Checks the passed string containes that pattern or not
const New2 = url.includes("hello");
// console.log(New2);

// Converting String in Arrays using split method
console.log(gameName.split("_")); // splitting the string gameName on the basis of underscore _
