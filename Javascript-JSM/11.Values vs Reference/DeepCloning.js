const person = {
    firstName: "Emma",
    car: {
        brand: "BMW",
        color: "blue",
        wheels: 4,
    },
};

let newPerson = { ...person };

newPerson.firstName = "Mark";
newPerson.car.color = "red";

console.log(person);
console.log(newPerson);

console.log(person.car);
// console.log(newPerson.car);

// For any changng in car object of person, newPerson will get the changes too.
// To get rid of it, we need to remove the reference from the inner object as well by using the spread operator.
newPerson.car = { ...person.car }; // or, newPerson = { ...person. car:{...person.car} };
newPerson.car.color = "green";
console.log(newPerson.car);

// This isn't a good solution for nested objects. So, we need to create a deep clone which destroys all the references.

const people = {
    firstName: "Emma Hix",
    car: {
        brand: "Toyota",
        color: "Black",
        wheels: 4,
    },
};
// JSON.stringify() method is used to convert an object into a JSON string.
const newPeople = JSON.parse(JSON.stringify(people) /*It gives a string */); // String is converted in JSON format
// console.log(newPeople);

newPeople.firstName = "Prashant";
newPeople.car.color = "Blue";

// For any changes in people object, newPeople will not get any change reflection.
console.log(people);
console.log(newPeople);
