// Array includes check if an array contains a certain value and returns true or false on that basis
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // true
console.log(array1.includes(4)); // false

const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat")); // true
console.log(pets.includes("at")); // false

// It's like
const bookshelf = ["Moby Dick", "The Great Gatsby", "Pride and Prejudice"];
if (bookshelf.includes("The Great Gatsby")) {
    console.log("You have read The Great Gatsby");
} else {
    console.log("You have not read The Great Gatsby");
}
// Array includdes is case sensitive
