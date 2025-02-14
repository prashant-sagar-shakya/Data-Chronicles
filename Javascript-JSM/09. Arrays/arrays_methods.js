const names = ["John", "Jane", "Mark", "Jack"];

// push() method adds an element at the end of an array, also can return the new length of the array.
names.push("Tim");
console.log(names);

// pop() method removes an element from the end of an array, also can return the removed element.
names.pop();
console.log(names);

// shift() method removes an element from the beginning of an array, also can return the removed element.
names.shift();
console.log(names);

// unshift() method adds an element at the beginning of an array, also can return the new length of the array.
names.unshift("Sarah");
console.log(names);

// splice() method adds or removes an element from any position in an array, it also can return that element.
names.splice(2, 1, "Prashant"); // removes 1 element from index 2, replaces it with Prashant
names.splice(2, 0, "Hello"); // adds 1 eleemnt at index 2, "Hello"
console.log(names);

// slice() method copies an element from an array, it also returns the copied element.
const newArr = names.slice(1, 3); // copies 2 element from index 1.
console.log(newArr);
