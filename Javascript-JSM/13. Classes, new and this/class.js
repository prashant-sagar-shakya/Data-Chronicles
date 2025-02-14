// A class is a schema for an object that can save many values

// Creating an object
const person = {
    name: "Melisha",
    age: 24,
    isWorking: true,
};

// Creating object schema using class for further use
class Person {
    constructor(name, age, isWorking) {
        this.name = name;
        this.age = age;
        this.isWorking = isWorking;
    }
}

const user = new Person("Melisha", 24, true);

console.log(user);

const createPerson = (name, age, isWorking) => ({ name, age, isWorking });
// {
// const userSchema = {
//     // If key and value is same then we can use only one
//     name,
//     age,
//     isWorking,
// };
// return userSchema;

// Or, Like this:
// return { name, age, isWorking };

// Arrow functions returns in one line
// };

const User = createPerson("John", 20, true);
console.log(User);
