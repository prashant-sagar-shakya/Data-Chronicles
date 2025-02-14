// =============================Arrays Part - 2============================
const marvel_heros = ["thor", "Ironman", "Spiderman", "Hulk"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // Push the second array entirely in first array
// console.log(marvel_heros);
// console.log(marvel_heros [4][1]);

// const allHeros = marvel_heros.concat(dc_heros); // Concatenates the second array with  first array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // Gives spread-out values of arrays
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

let real_another_array = another_array.flat(Infinity); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
// console.log(real_another_array);

// Checking the passed object is array or not! using isArray() method
// console.log(Array.isArray("Prashant"));

// Making array from passed iteratable object using from() method
// console.log(Array.from("Prashant"));

// console.log(Array.from({ name: "Prashant" })); // It needs keys to make array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.
