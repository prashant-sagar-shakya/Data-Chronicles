// Write a program that greets a person based on their gender, (if-else)
function greet(gender, firstName, lastName) {
  if (gender === "male") console.log(`Hello, Mr. ${firstName} ${lastName}!`);
  else if (gender === "female") console.log(`Hello, Ms. ${firstName} ${lastName}!`); // Hello, Ms. Prashant Shakya!
}

// Example ussage
greet("male", "Prashant", "Shakya");
greet("female", "Sanjana", "Shakya");
