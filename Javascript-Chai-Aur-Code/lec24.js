// ============ Immediately Invoked Function Expressions (IIFE) ==========

// (function one() {
// named IIFE => because it has a name 'one'
//     console.log(`DB CONNECTED`);
// })();

// IIFE prevents data from the pollution of global scope and wrote for immediate execution

// Syntax of IIFE: ()()

// Writting IIFE by using arrow function:
((name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Prashant");

// Writting 2 IIFE simulteneously must need to terminated with a ;
