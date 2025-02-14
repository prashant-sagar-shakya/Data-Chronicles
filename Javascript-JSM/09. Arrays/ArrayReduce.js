// Array Reduce, iterates through an array and returns a single value

const groceryList = [29, 12, 45, 35, 87, 110]; // Price of all the items

// let total = 0;
// groceryList.forEach((price) => {
//     total += price;
// });
// console.log(total);

// Or,

// groceryList.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
// accumulator is initially set to 0 here

const total = groceryList.reduce((total, price) => total + price, 0);
console.log(total);
