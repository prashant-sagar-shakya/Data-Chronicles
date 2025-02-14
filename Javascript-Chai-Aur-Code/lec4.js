// =================================Printing Something in js=====================================
// console.log("Prashant Sagar Shakya");

// ===============================Varibles in JS=================================================
const accountId = 144553;
let accountEmail = "prashnt.sagar.shakya@gmail.com";
var accountPassword = "Prashant@69";
accountCity = "Mohali"; // not recomended

// accountId = 2; // not allowed to modify const

accountEmail = "shakyaprashant2003@gmail.com";
accountPassword = "DarkWarrior"; // var is not recomended to use, beacuse of issue in block scope and functional scope
accountCity = "Chandigarh";

let accountState; // Value is not given, so by default it stores undefined

console.log(accountEmail); // Manual Printing one by one

console.table([
	accountId,
	accountEmail,
	accountPassword,
	accountCity,
	accountState,
]); // List printing with table indexing
