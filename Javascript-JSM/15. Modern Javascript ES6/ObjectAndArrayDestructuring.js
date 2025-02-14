// Object Destructuring

const person = {
    firstname: "Gary",
    lastName: "Kasparov",
    car: {
        color: "red",
        wheels: 4,
    },
    animals: {
        dog: {
            name: "Rex",
            age: 3,
        },
        cat: {
            name: "Garfield",
            age: 2,
        },
    },
};

// Not Following DRY Principle, due to repetative code

// console.log(person.firstname);
// console.log(person.lastName);
// console.log(person.car.color);
// console.log(person.car.wheels);
// console.log(person.animals.dog.name);
// console.log(person.animals.dog.age);
// console.log(person.animals.cat.name);
// console.log(person.animals.cat.age);

const {
    firstname,
    lastName,
    car: { color, wheels },
    animals: { dog, cat },
} = person;

console.log(firstname);
console.log(lastName);
console.log(color);
console.log(wheels);
console.log(dog.name);
console.log(dog.age);
console.log(cat.name);
console.log(cat.age);

// Array Destructuring

const introduction = ["Hello", "I", "am", "Sarah"];

// const greeting = introduction[0];
// const name = introduction[3];
// console.log(greeting, name);

const [greeting, , , name] = introduction;
console.log(greeting, name);
