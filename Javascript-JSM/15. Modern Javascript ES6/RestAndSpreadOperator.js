// Spread and Rest Operators (...)

// Rest operator:
const add = (...args) => {
    return args.reduce((acc, val) => acc + val);
};

console.log(add(2, 2, 2, 2, 2));

// Spread Operator:
const numbers = [1, 2, 3, 4, 5, 6];
console.log(...numbers); // Takes the number outside the array and then console log it

// Let's try with objects
const object = { name: "john", age: 25 };
const object1 = { ...object, name: "Jenny" };

console.log(object);
console.log(object1);
