// If statement in any programming language is a conditional statement which is used to execute a block of code if a condition is true.
const age = 18;
if (age >= 18) {
    console.log("You are eligible to vote");
} else if (age < 1 && age > 90) {
    // Logical operator with multiple conditions
    console.log("You are a non existing person");
} else {
    console.log("You are not eligible to vote");
}

// Truthy and Falsy values
// Truthy value means the passed value will be changed to true when converted in a boolean context
// true means: 1 or true
// false means: 0 or false
if (1) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// In javascript, there are 6 falsy values
// false, 0, "", null, undefined, NaN

console.log("truthy" && 1 && "test" && 999); // The output will be 999, because every value chained with && is true. So, it will return the last value.
console.log("truthy" && 0 && "test" && 999); // The output will be 0, because 0 is a falsy value. So, it will gonna return the first falsy value.
console.log("truthy" || 1 || "test" || 999); // The output will be truthy, because "truthy" is a truthy value. So, it will gonna return the first truthy value.
console.log("" || 0 || null || undefined); // In this case, the last falsy value will be returned as output.

console.log(!!0); // !(!0) => !(true) => false

const value = true;
// !! => Gives the boolean context of a value
if (!!value) {
    console.log("Value is Truthy");
} else {
    console.log("Value is Falsy");
}
