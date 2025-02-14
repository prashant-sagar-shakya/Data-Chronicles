// Array filter method is a non-mutative method used to filter an array
const numbers = [1, 2, -3, -4, 5, 6, 7, -8, 9, 10];
const positiveNumbers = numbers.filter((number) => {
    return number >= 0;
});

console.log(positiveNumbers);

// Arrow without any curly braces is an immediate return

const negativeNumbers = numbers.filter((number) => number < 0);
console.log(negativeNumbers);

// A filter is basically a loop with some condition
// filter is a non-mutative method

// e.g: A startup wants to reward the employees with 7 or more hours of overtime
const employeesData = [
    {
        name: "John",
        overtime: 5,
    },
    {
        name: "Cardi Vee",
        overtime: 10,
    },
    {
        name: "George Lopez",
        overtime: 12,
    },
];

const employeesToReward = employeesData.filter(
    (employee) =>
        // {
        // if (employee.overtime >= 7) {
        //     return true;
        // }
        // or, by using immediate return
        employee.overtime >= 7
    // }
);

console.log(employeesToReward);

// Printing only names of employees
const employeeNames = employeesToReward.map((employee) => employee.name);
console.log(employeeNames);

// Using forEach Loop
employeeNames.forEach((name) => console.log(`${name} received a reward`));
