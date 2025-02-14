// The "new" Keyword
// It is used to create a new empty object
const person = {};
const person1 = new Object(); // This syntax allows us to using constructors

person.firstName = "John";
person1.firstName = "John";

console.log(person);
console.log(person1);

console.log(typeof person);
console.log(typeof person1);

// Simmilar thing happens with arrays also,
// const arr1 = new Array(1, 2, 3);

const myDate = new Date("May 10, 2024");
console.log(myDate);
console.log(myDate.getFullYear());

const myNumber = new Number(105.79);
console.log(myNumber.toFixed(0)); // 106 because 105.79 is rounded to 106
