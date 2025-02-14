// Array maps allocates memory in order to store or return values, whereas forEach method does not allocate memory so it has return value of undefined
// The forEach method also allow for a callback function that will allow to change the original array
// Map method returns a new array while leaving the original one in its original state

const inventory = [
    { price: 5, name: "eggs" },
    { price: 10, name: "milk" },
    { price: 15, name: "butter" },
    { price: 20, name: "flour" },
];

// const prices = inventory.map(() => {});
const prices = inventory.map((item) => item.price);
console.log(prices);

const names = inventory.map((item) => item.name);
console.log(names);
write 