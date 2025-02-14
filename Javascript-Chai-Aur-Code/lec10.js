// ================================Memory in JS=====================

// Two types of memory: Stack & Heap

// Stack => Primitive types (Copy)
// Heap => Non-Primitive types (Reference)

// Implementing Stack (Pass by copied value)
let name = "PrashantShakya";
let anotherName = name;
anotherName = "AryanShakya"; // Only value of anotherName is changed because only copy is passed

console.log(name);
console.log(anotherName);

// Implementing Heap Memory (Pass by reference)
let user1 = {
	email: "user@google.com",
	upi: "user@ybl",
};
let user2 = user1;

user2.email = "prashant@gmail.com"; // Changes occurs for both

console.log(user1.email, user2.email);
