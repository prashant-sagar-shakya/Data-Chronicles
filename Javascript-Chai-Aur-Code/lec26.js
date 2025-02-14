// ============================== Control Flow =====================================

// if-else & else-if statement :
// if (condition /*true*/) {
//     // scope
// }
// else if (condition 2) {
// scope
// }
// else {
// scope
// }

// ==, <, >, <=, >=, !=, === (strict equal => with type checking)

// one hand notation of if statement (without scope) => not recomended:
// if (true) console.log("Hello"),
// console.log("I'm Prashant Sagar Shakya");

// const a = 10, b = 5;
// console.log((a > b) ? "Hello" : "hi"); // => ?: (Ternary Operator)

// Logical Operators => || (Logical OR), && (Logical AND), ! (Logical NOT)

// Bitwise Operators => & (Bitwise AND), | (Bitwise OR), ~ (Bitwise NOT), ^ (Bitwise XOR), << (Left Shift), >> (Right Shift), >>> (Unsigned right shift)

// Switch-Case in JS:
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// Truthy Values

// // const userEmail = "prasshant.sagar.shakya@gmail.com";
// const userEmail = "";
// // const userEmail = [];
// if (userEmail) {
//     console.log("Got User Email");
// } else {
//     console.log("Email not found");
// }

// Truthy Values:
// "0", "false", " ", [], {}, function(){}

// Falsy Values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Checking an empty array is empty or not

// const myArr = [];
// if (myArr.length === 0) {
//     console.log("Empty Array");
// }

// Checking an empty object is empty or not
// const myObj = {};
// if (Object.keys(myObj).length === 0) {
//     console.log("Empty Object");
// }

// Nullish Coalescing Operator (??) => The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// const a = null ?? 'default string (right side operand) from a due to presence of null';
// console.log(a);
// Expected output: "default string"

// const b = undefined ?? 'default string (right side operand) from b due to presence of undefined';
// console.log(b);
// Expected output: "default string"

// const c = 0 ?? 42;
// console.log(c);
// Expected output: 0

