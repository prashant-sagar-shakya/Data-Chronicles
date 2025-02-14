// =============================Arrays Part - 1===========================

const myArr = [0, 1, 2, 3, 4, 5];
// JS arrays are resizable and can contain mixed values
// Copy of array provied a shallow copy of arrays in JavaScript => i.e referential copy (same reference)
const myHeros = ["Thor", "CA", "Hulk"];
const myArr2 = new Array();
const myArr2_1 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

// Push in Arrays
myArr.push(7);
// console.log(myArr);

// Pop in Arrays
myArr.pop();
// console.log(myArr);

// unshift and shift
myArr.unshift(9);
// console.log(myArr);
myArr.shift();
// console.log(myArr);

// includes() method
// console.log(myArr.includes(5));

// indexOf() method
// console.log(myArr.indexOf(5)); // if -1 then not found

const newArr = myArr.join(); // Binds the array in string format
// console.log(newArr);

// slice => returns copy of section of an array
const myn1 = myArr.slice(1, 3);
// console.log("Before Slice ", myArr);
// console.log("Slice", myn1);
// console.log("After Slice ", myArr);

// modifies the whole array and removes the spliced part from original array
// console.log("Before Splice ", myArr);
const myn2 = myArr.splice(1, 3);
// console.log("Splice ", myn2);
// console.log("After Splice ", myArr);
