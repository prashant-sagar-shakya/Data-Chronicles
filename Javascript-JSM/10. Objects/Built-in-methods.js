// Object Methods

// const myObj = {
//     myMethod: () => {},
//     myMethod2: function () {},
//     myMethod3() {},
// };

const dog = {
    name: "Bruno",
    age: 5,
    // bark: () => {
    //     // This keyword: It referes to the object, and we can't use it in arrow function.

    //     console.log("Woof Woof!");
    // },
    listAllProperties: function () {
        console.log(this.name, this.age);
    },
};
// console.log(dog.name);
// console.log(dog.age);
// dog.bark();

dog.listAllProperties();
