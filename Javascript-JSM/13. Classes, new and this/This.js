// The this keyword always used over normal functions not on arrow functions
function Sentence(words) {
    this.words = words;

    console.log(this);
}

const firstString = new Sentence("Hello, this is a sentence");

console.log(this); // If this is not called inside any function, it gives a global window object to intract with the DOM

const person = {
    name: "John",
    getName() {
        console.log(this);
    },
};
person.getName();

function Car(color, brand, wheels) {
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;

    console.log(this);
}

const blueCar = new Car("blue", "BMW", 4);
const redCar = new Car("red", "Mercedes", 4);

const func = (a, b) => {
    console.log(a + b);
};
