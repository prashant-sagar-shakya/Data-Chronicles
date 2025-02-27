// Write a function that returns the sum of two numbers in pretty format and also write another function that takes this sum and print it in passive format.
function sum(a, b) {
    return `${a} + ${b} = ${a + b}`;
}
function passiveSum(sum) {
    console.log(`The sum is ${sum}`);
}
let s = sum(2, 3);
passiveSum(s);