// =====================Conversions and operations in JS==========================

// let score = 33 // Direct number data given
let score = "33"; // Data given in string format

console.log(typeof score);
console.log(typeof score);

// TypeConversion in JS

let valueInNumber = Number(score); // Typeconversion to number datatype
console.log(typeof valueInNumber);

let val = "50abc";
let ValInNum = Number(val);
console.log(typeof ValInNum);
console.log(ValInNum); // -----> NaN => Not a Number but can be converted into normal format

let Null_Val = null;
let null_print = Number(Null_Val);
console.log(typeof null_print); // Null is a type of number, but not correct statement
console.log(null_print); // 0 is the output which is not accurate

let un = undefined;
let undef = Number(un);
console.log(typeof undef);
console.log(undef); // Nan (Not a Number) type

// If boolean value is true -> Output is 1, else output is 0
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Prashant" => true

let someNumber = 33;

let stringNumber = String(someNumber); // Converting a number in String

console.log(typeof stringNumber);
console.log(stringNumber);
