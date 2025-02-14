// Arrays are linear ordered collection of data
// Linear ordered collection of data, allows duplicate values, indexed by integers.

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

console.log(months);
console.log(typeof months);

// Retriving a certain element from an array
console.log(months[0]); // January

// Replacing an element in an array
months[2] = "Not March";
console.log(months);

// Extending an array
months[12] = "Hello World";
console.log(months);

// Finding length of an array
console.log(months.length);

// An array can store any type of data
const values = [
    1,
    true,
    "Hello",
    null,
    undefined,
    { name: "John" },
    [1, 2, 3],
    () => {},
];

console.log(values);

// Looping over an array
for (let i = 0; i < months.length; i++)
    console.log(months[i]);