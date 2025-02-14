// Asynchous Code

// setinterval: It allows you to execute a function repeatedly at a specified interval of time (ms).
// setInterval(() => console.log("Hello World!"), 1000); // That is going to execute every one second

// myInterval = setInterval(() => console.log("Hello World!"), 3000);
// clearInterval(myInterval); // used to clear the interval after a given time

// // setTimeout: It allows you to execute a function once after a specified interval of time (ms).
// // setTimeout(() => console.log("Hello World!"), 5000);

// // Asynchronous Code: JavaScript is an asynchronous language. It means that the code is not executed immediately. Instead, the code is executed by the browser.
// myTimeout = setTimeout(() => console.log("Hello World!"), 5000);
// clearTimeout(myTimeout); // It clears the timeout

setTimeout(() => console.log("Hello World!"), 5000); // Executed after 5 seconds

console.log("Hello World!"); // Executes first