// ===========================Dates in Javascript=======================
// Temporal API
let myDate = new Date();
// Date is a object in JS

// console.log(myDate); // Unstandardarised form
// console.log(myDate.toString());

// console.log(myDate.toDateString()); // To get date in standard format
// console.log(myDate.toLocaleString()); // LocaleString gives time also with date

let myCreatedDate = new Date(2023, 0, 23); // Months in Js starts from 0
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.getTime()); //Gives data in milliseconds from 1970 (when date is implemented in JS) to till given date in myCreatedDate

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate2.toLocaleDateString()); // Gives date in format of local machine

// yy-mm-dd or fomatted date
let newDate = new Date("2023-01-14");
// console.log(newDate.toLocaleString());

// Timestamps
let myTs = Date.now();
// console.log(myTs); // Gives data in milliseconds from 1970 (when date is implemented in JS) to till now
// conversion in seconds by dividing by 1000 and and floor value
// console.log(Math.floor(myTs/1000));

// Formatting of a date object
newDate.toLocaleString("default", {
	weekday: "long",
}); // 'default' denotes internatinalization of date type
