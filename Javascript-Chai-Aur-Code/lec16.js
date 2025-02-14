// ==========================Objects in JS Part - 1========================
// singleton //Object.create
// Object declaration as literals not forms singleton

// object literals

const mySym = Symbol("key1");

// Objects => key:value mapping
const JSuser = {
	name: "Prashant",
	"full name": "Prashant Sagar Shakya",
	age: 18,
	[mySym]: "mykey1",
	location: "Bihar",
	email: "Prashant.sagar.shakya@gmail.com",
	isLoggedIn: "false",
	lastLoginDays: ["Monday", "friday"],
};
// console.log(JSuser.email); // Not recomended
// console.log(JSuser["email"]); // recomended
// console.log(JSuser["full name"]);
// console.log(typeof JSuser[mySym]);

// Changing values of an object
JSuser.email = "shakyaprashant2003@gmail.com";
// console.log(JSuser["email"]);

// Freezing an object for no more modifications
// Object.freeze(JSuser);
// console.log(JSuser);

JSuser.greeting = function () {
	console.log("Hello JS User");
};
console.log(JSuser.greeting());

JSuser.greeting2 = function () {
	console.log(
		`Hello JS User, ${this.name}` /*refering the name using this.name*/
	);
};
console.log(JSuser.greeting());
console.log(JSuser.greeting2());
