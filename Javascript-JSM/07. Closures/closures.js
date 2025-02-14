// Closures in JavaScript

const outer = () => {
    const outerVar = "Hello!";
    const inner = () => {
        const innerVar = "World!";
        console.log(outerVar + " " + innerVar);
    };
    return inner; // Return inner function to outer function
};

const innerFn = outer(); // Assigning outer function to a variable that gonna be a function
innerFn();

// closures in javascript are functions that have access to variables declared in their outer function scope.

const init = () => {
    const hobby = "Learning JavaScript"; // local variablecreated by init function
    const displayHobby = () => {
        // closure created by displayHobby function
        console.log(hobby); // using a varibale create din the parent function
    };
    displayHobby(); // calling the displayHobby function
};
init();
