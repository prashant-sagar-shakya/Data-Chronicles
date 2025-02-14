// Clonning Arrays
// 1st way: Spread operator

const numbers = [1, 2, 3, 4, 5]; // #123asd
console.log(...numbers);
const copiedNumbers = numbers; // #123asd
console.log(numbers === copiedNumbers); // true

let newNumbers = [...numbers]; // spread operator makes a shallow clone of the array "numbers"
console.log(newNumbers);

console.log(numbers === newNumbers); // false => This means it's a shallow copy.

// Let's try to push something in array and see the changes
numbers.push(6);

console.log(numbers);
console.log(copiedNumbers);
console.log(newNumbers);

// 2nd way: Array.slice()
newNumbers = numbers.slice(); // # 321dsa, array.slice() also makes a shallow clone of the array "numbers"
console.log(newNumbers);


// Let's try with objects
// 1st way: Using spread operator (...)

const person = {
    name: "Mark",
    age: 25
}
let otherPerson = { ...person };
person.age = 22;

console.log(person);
console.log(otherPerson);

// 2nd way: Using Object.assign()
otherPerson = Object.assign({}, person);
console.log(otherPerson);