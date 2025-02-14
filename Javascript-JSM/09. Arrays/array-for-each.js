// For Each loop in Arrays
const names = ["John", "Jane", "Mark", "Jack"];

// () => {} This is a callback function

names.forEach((name, i) => {
    console.log(name, i);
});

// Or, like this: names.forEach((name, i) => console.log(name, i));

// Extracting the function
const logThename = (name, i) => {
    console.log(name, i);
};
// For Each loop
names.forEach(logThename);

// ForEach methods always returns undefined values
// Don't use it when yout have to break the loop at a certain condition, and also when working with async code

// Finding sum of array elements
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => (sum += number));
console.log(sum);