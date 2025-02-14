// An operator performs some operations on single or multiple operands
// Operators in javascript:
// Arithmetic Operators: + - * / % ** ++ --
// Comparision Operators: == === != !== > < >= <=
// Logical Operators: && || !
// Assignment Operators: = += -= *= /= %= **=
// Ternary Operators: ? :
// Spred Operator: ...

const firstNumber = 20;
const secondNumber = 10;

console.log("Arithmetic Operators:");
// using + operator
let result = firstNumber + secondNumber;
console.log(result);

// using - operator
result = firstNumber - secondNumber;
console.log(result);

// using * operator
result = firstNumber * secondNumber;
console.log(result);

// using / operator
result = firstNumber / secondNumber;
console.log(result);

// using % operator
result = firstNumber % secondNumber;
console.log(result);

// using ** operator, it means firstNumber to the power of secondNumber
result = firstNumber ** secondNumber;
console.log(result);

console.log("Unary Operators:");
// using ++ operator
console.log(result++); //Post increment
console.log(++result); //Pre increment

// using -- operator
console.log(result--); //Post decrement
console.log(--result); //Pre decrement

console.log("Comparision Operators:"); // Result will be true or false
// using == operator: It compares the value only not the data type and also called loose equality
result = firstNumber == secondNumber;
console.log(result);

// using === operator: It compares the values as well as data type also, called strict equality
result = firstNumber === secondNumber;
console.log(result);

// using != operator
result = firstNumber != secondNumber;
console.log(result);

// using !== operator: It compares the data type also
result = firstNumber !== secondNumber;
console.log(result);

// using > operator
result = firstNumber > secondNumber;
console.log(result);

// using < operator
result = firstNumber < secondNumber;
console.log(result);

// using >= operator
result = firstNumber >= secondNumber;
console.log(result);

// using <= operator
result = firstNumber <= secondNumber;
console.log(result);

console.log("Logical Operators:"); //Returns true or false
// using && operator
result = firstNumber > 10 && secondNumber > 10;
console.log(result);

// using || operator
result = firstNumber > 10 || secondNumber > 10;
console.log(result);

// using ! operator: returns not of the value, i.e true becomes false and false becomes true (reverses the boolean value)
result = !(firstNumber > 10);
console.log(result);

console.log("Assignment Operators:");
// using = operator: used to assign value to a variable
result = firstNumber;
console.log(result);

// using += operator
result += secondNumber; // it means result = result + secondNumber
console.log(result);

// using -= operator
result -= secondNumber; // it means result = result - secondNumber
console.log(result);

// using *= operator
result *= secondNumber; // it means result = result * secondNumber
console.log(result);

// using /= operator
result /= secondNumber; // it means result = result / secondNumber
console.log(result);

// using %= operator
result %= secondNumber; // it means result = result % secondNumber
console.log(result);

// using **= operator
result **= secondNumber; // it means result = result ** secondNumber
console.log(result);

console.log("Ternary Operator:"); // It is also called Conditional Operator
result = firstNumber > secondNumber ? firstNumber : secondNumber; // Calculating the maximum of two numbers using ternary operator
console.log(result);

console.log("Spread Operator:"); // Denoted by ... and used to expand values of an array
let arr = "Prashant";
result = [...arr];
console.log(result);
