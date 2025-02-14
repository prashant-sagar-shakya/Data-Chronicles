// Object -> It is an object constructor
// Object.keys() creates an array containing the keys of an object.

// For e.g:
const employees = {
    boss: "Michael",
    secretary: "Pam",
    sales: "Jim",
    accountant: "Oscar",
};

const positions = Object.keys(employees); // Setting keys of object -> employees as positions of employees.
console.log(positions);

// Object.values() creates an array containing the values of an object.

// For e.g:
const session = {
    id: 1,
    time: `26-July-2018`,
    device: `mobile`,
    browser: `Chrome`,
};

const values = Object.values(session); // Setting values of object -> session as values of session.
console.log(values);

// Trying to get both keys and values of an object but in separated arrays.
// Object.entries() creates a nested array of the key/value pairs of an object.

// For e.g:
const OperatingSystem = {
    name: "Ubuntu",
    version: "18.04",
    license: "Open Source",
};

const entries = Object.entries(OperatingSystem);
console.log(entries);
// It can be extracted through forEach loop as:
entries.forEach((entry) => {
    let key = entry[0];
    let value = entry[1];
    console.log(`${key}: ${value}`);
});

// Object.freeze() prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.

// For e.g:
const user = {
    username: "John",
    password: "12345",
};

const admin = Object.freeze(user);
admin.password = "123123";
admin.username = "Prashant";
console.log(admin); // Properties remains same as before not modified due to freeze() method.

// Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties.

// For e.g:
const user2 = {
    username: "Johnny",
    password: "24360",
};

const newUser = Object.seal(user2);
newUser.password = "test123";
newUser.active = true;
// Here the password will updated but active is a new property so it can't be added to our object User2.
