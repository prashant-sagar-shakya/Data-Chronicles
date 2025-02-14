// ============================ for-in, for-of, for-each loop =====================
// Looping On Arrays

const arr = [1, 2, 3, 4, 5];

// for of loop => The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

// Objects are not iteratable through for of loop

// Syntax: for (const iterator of object) { //Code }

// Maps in JS: => The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// const map1 = new Map();

// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);

// console.log(map1);

// console.log(map1.get('a'));

// map1.set('a', 97);

// console.log(map1.get('a'));

// console.log(map1.size);

// map1.delete('b');

// console.log(map1.size);

// for (const [key, value] of map1) {
//     console.log(key, "=>", value);
// }

// for in loop => The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
// For in loop is used for object iteration as well as array iteration but it gives keys

// /Syntax:
// for in loop {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// const object = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// };

// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }

// const myarr = ["js", "rb", "py", "java", "cpp"];

// for (const key in myarr) {
//     console.log(key);
//     // console.log(myarr[key]);
// }

// For Each Loop => The forEach() method of Array instances executes a provided function once for each array element.

// For each loop using normal function
const myArr = ["a", "b", "c"];
// myArr.forEach(function (element) {
//     console.log(element);
// });

// For each loop using arrow function
// myArr.forEach((element) => {
//     console.log(element);
// });

// One more way of using for each loop
// function printMe(item) {
//     console.log(item);
// }
// myArr.forEach(printMe)

// myArr.forEach((item, index, arr) => {
//     console.log(item);
//     console.log(index);
//     console.log(arr);
// });

const myCoding = [
    {
        languageName: "javascript",
        languagefileName: "Js",
    },
    {
        languageName: "C",
        languagefileName: "c",
    },
    {
        languageName: "Python",
        languagefileName: "py",
    },
];

myCoding.forEach((item) => {
    console.log(item.languageName, item.languagefileName);
});
