// ========================Objects in JS Part - 2=======================
// Objects through singleton & using constructors

// const tinderUser = new Object(); // singleton object

const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Prashant Shakya";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// Object of Object
const regularUser = {
	email: "some@gmail.com",
	fullname: {
		userFullName: {
			firstname: "Prashant",
			lastname: "Shakya",
		},
	},
};

console.log(regularUser.fullname.userFullName.firstname);

// Optional Chaining (Explore)

// Combining Objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2); // Recomended to Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// Array of Objects
const users = [
	{
		id: 1,
		email: "hello@gmail.com",
	},
];
// console.log(users[0].email);

console.log(tinderUser); // Printing tinderUser for reference

// keys() method to get keys of an object
// console.log(Object.keys(tinderUser)); // Datatype => Array
// values() method to get values of an object
// console.log(Object.values(tinderUser));

// Checking a value present in object or not
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
