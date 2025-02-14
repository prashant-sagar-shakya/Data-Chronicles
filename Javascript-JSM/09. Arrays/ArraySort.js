// Array Sort => Alphabetically
const names = ["Anne", "Carl", "Bob", "Dean"];
names.sort();
console.log(names);

// Array sort mutates the original array

// Array Sort => Numerically, for numbers in ascending order we have to compare the numbers
const numbers = [1, 5, 3, 2, 4, 15, 25];
numbers.sort((a, b) => a - b); // 1, 2, 3, 4, 5, 15, 25
console.log(numbers);

numbers.sort((a, b) => b - a); // 25, 15, 5, 4, 3, 2, 1
console.log(numbers);
