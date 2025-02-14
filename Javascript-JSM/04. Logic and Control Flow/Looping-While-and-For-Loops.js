// Loops in javascript are used to repeat a block of code until a certain condition is met.
// The repeatation of loop is called iteration.

// There are two type of loops: Finite loops and Infinite loops.
// Finite loops are those loops which have a finite number of iterations or, it will stop iterating after condition is met.
// Infinite loops are those loops which will keep iterating until the program is terminated. 

console.log("While Loop:");
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("For Loop:");
for (let i = 1; i <= 10; i++){
    console.log(i);
}