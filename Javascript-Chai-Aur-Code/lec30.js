// ==================== Basics of forEach Loop ============================
// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter is used to filter the values
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//     return num > 4;
// }); // must have to use return statement with arrow function when using scopes
// console.log(newNums);

// Alternative of filter
// const newNums = [];
// myNums.forEach((num) => {
//     if (num > 4) newNums.push(num);
// });
// console.log(newNums);

// Use of filter

// const books = [
//     { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//     { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//     { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//     { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//     { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//     { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//     { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//     { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//     { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let userBooks = books.filter((bk) => bk.genre === "History");

// userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre === "History";
// });
// console.log(userBooks);

// Using Maps for adding some value in each value
// const newNums = myNums.map((num) => (num + 10))
// console.log(newNums);

// Chaining through Maps
// const newNums = myNums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40); // filter is based on boolean

// console.log(newNums);

// reduce method in JS => The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// Syntax : reduce(callbackFn)
//reduce(callbackFn, initialValue)

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
// );

// console.log(sumWithInitial);

// initially accumulator is assigned with initial value and it uses initialValue only at once and keep updating accumulator each & every time

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`accumulator is : ${acc} and current value is : ${currval}`);
//     return acc + currval;
// });

// perfoming reduce over myNums using arrow function
// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal);

// Performing reduce over objects
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "py course",
        price: 999,
    },
    {
        itemName: "mobile dev course",
        price: 5999,
    },
    {
        itemName: "data science course",
        price: 12999,
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
