// ========================== Arrow Functions ===========================
const user = {
    username: "Prashant",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // this => refers to current context
        console.log(this);
    },
};

// user.welcomeMessage()
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function one() {
//     let username = "Prashant";
//     console.log(this.username);
// }
// one();

// Syntax : () => {} Arrow Function
// const func = () => {
//     let username = "Prashant"
//     console.log(this);
// }
// func();

// Explicit return (arrow function) => must for returning objects
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(5, 7));

// Implicit return (arrow function)

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(5, 7));

// Writting arrow function with curly braces required return statement but writting it without curly braces doesn't required return

const myArray = [2, 5, 3, 7, 8];

// Functions and arrow functions using arrays
// myArray.forEach(function () { })
// myArray.forEach(() => { });
// myArray.forEach(() => ());
