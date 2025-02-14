// What is synchronous Javascript?

// Synchronous javascript is one in which code is executed line by line and their tasks are completed instantly, i.e. there is no time delay in completion of tasks for those lines of code.

// For e.g.

const functionOne = () => {
    console.log("Function One");
    functionTwo();
    console.log("Function One, Part 2");
};

const functionTwo = () => {
    // console.log("Function Two");

    // Async Code
    setTimeout(() => console.log("Function Two"), 3000); // Executes after 3 seconds of functionOne();
};

functionOne();


// Asynchronous Javascript is one in which some lines of code take time to run. These tasks are run in background while the Javascript engine keeps executing other lines of code.
// When the result of the asynchonous tasks gets available, is then used in the program.