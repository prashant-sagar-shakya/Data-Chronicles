// ======================== Functions part 1 =======================

// function sayMyName() {
//     console.log("Prashant");
//     console.log("sagar");
//     console.log("shakya");
// }

// sayMyName();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, null);

// Parameters : values under function
// Arguments : values passed to a function

// function addTwoNumbers(number1, number2) {
//     return (number1 + number2);
//     console.log("Prashant"); // Not executable because of return
// }

// const res = addTwoNumbers(3, 5);
// console.log("Result: ", res);

function loginUserMessage(
    username /* Default arguments, username = "Prashant" */
) {
    if (username === undefined) {
        /* if(!username) => not username*/ return "Please enter a username";
    }
    return `${username} Just Logged in`;
}

// console.log(loginUserMessage("Prashant"));
console.log(loginUserMessage(/*no value*/)); // undefined Just Logged in for overcome this situation we used if condition inside the function
