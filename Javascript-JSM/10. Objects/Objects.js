// Objects: While other datatypes can store only simmilar type of data, objects can store different types of data, and it is known as non-primitive data type.
// It describes properties and methods of a particular object.
// Object is a unordered collection of relateed data in the form of key and value pairs.
const firstName = "Johnny";

const person = {
    // firstName: firstName, // if both looks same then we can write it as: firstName and it will take the value automatically which is equal to the first occurrencewith the same variable naming.
    firstName,
    lastName: "Hanks",
    age: 30,
    car: {
        brand: "BMW",
        model: "X5",
        year: 2020,
        color: "black",
    },
};

console.log(person);