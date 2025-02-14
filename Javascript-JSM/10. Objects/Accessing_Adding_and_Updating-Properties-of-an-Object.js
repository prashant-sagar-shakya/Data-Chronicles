// Dot Notation: Accessing Properties of an Object
const person = {
    firstName: "Brad",
    lastName: "Pitt",
};

person.dog = {
    name: "Bruno",
    breed: "Husky",
    age: 5,
};

console.log(person.dog);

// Square Bracket Notation: Accessing Properties of an Object
console.log(person["dog"]);
const property = "dog";
// Using Square Bracket Notation, we can access propeties dynamically.
console.log(person[property]);