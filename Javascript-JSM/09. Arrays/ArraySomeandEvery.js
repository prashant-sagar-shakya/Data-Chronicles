const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Array Some
const greaterThan5 = numbers.some((number) => number > 5);
console.log(greaterThan5); //true, returns true if any element satisfies the condition
// some method simply runs a for loop and checks for that certain condition

// Array Every
const lessThan5 = numbers.every((number) => number < 5);
console.log(lessThan5); //false, returns true if all elements satisfies the condition
// every method also simply runs a for loop and checks for that certain condition