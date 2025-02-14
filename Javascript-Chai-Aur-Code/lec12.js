// ============================Numbers & Math=============================
// Numbers============================

// Typeof = Number
const score = 400;
// console.log(score);

// Typeof = Object
const balance = new Number(100);
// console.log(balance);

// toString method()
// console.log(balance.toString().length);

// toFixed method()
// console.log(balance.toFixed(1));

// toPrecision method()
const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));

// toLocalString method()
const hundreds = 1000000;
// console.log(hundreds.toLocaleString());

// According to Indian system
// console.log(hundreds.toLocaleString('en-IN'));

// Maths=============================

// Math Object
// console.log(Math);

// abs
// console.log(Math.abs(-4));

// round -> round-up the values
// console.log(Math.round(4.6));

// ceil & floor
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));

// min & max
// console.log(Math.min(4, 3, 7, 5));
// console.log(Math.max(4, 3, 7, 5));

// random method always gives random values in 0 to 1
// console.log(Math.random())

// console.log((Math.random() * 10) + 1);

// Range Based Random Number Generation
const Min = 10;
const Max = 20;
console.log(Math.random());
console.log(Math.floor(Math.random() * (Max - Min + 1)) + Min);
