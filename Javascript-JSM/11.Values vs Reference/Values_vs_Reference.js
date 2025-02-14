// Javascript differentiates Data Types on:
// - Primitive values (Number, String, Boolean, ....)
// - Complex values (Objects, Arrays)

let x = 1;
let y = x;
x = 2; // x is 2 now

console.log(x, y);

// Let's try with Strings

let firstPerson = "Mark";
let secondPerson = firstPerson;
firstPerson = "Austin"; // firstPerson is "Austin" now

console.log(firstPerson, secondPerson);

// Let's try with Complex values - Arrays and Objects now
// Arrays:
const animals = ["dogs", "cats"];
const otherAnimals = animals; // ["dogs", "cats"]
animals.push("llamas");
console.log(animals); // ["dogs", "cats", "llamas"];
console.log(otherAnimals); // ["dogs", "cats", "llamas"];

// Objects:
const person = {
    firstName: "Jon",
    lastName: "Snow",
}; // Let memory location be #123asd

const otherPerson = person; // It also points to the same memory location as person

person.firstName = 'Jhonny';
console.log(person); // -> Jhonny Snow
console.log(otherPerson); // -> Jhonny Snow

// When a variable is assigned a primitive value, it just copies that value
// Whereas when a variable is assigned an object or array, or function, it creates a new reference to that object location in memory.

// One more Example:
const p1 = { name: 'Jon' }; // #123asdf
const p2 = { name: 'Jon' }; // #123dsaf
// Are the both same object? => No
console.log(p1 === p2) // => false