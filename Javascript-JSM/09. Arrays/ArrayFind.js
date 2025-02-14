// Array find method returns the first value that satisfies the condition

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const value = numbers.find((number) => {
    return number > 5;
});
console.log(value); // 6

const states = ["Alaska", "California", "Colorado", "Hawai"];
const state = states.find((state) => state.startsWith("C"));
console.log(state);
