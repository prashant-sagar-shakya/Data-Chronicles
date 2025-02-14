// ============================== Scopes Part - 1 ===============================

// {} => Defines Scope

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); Accessing a outside the scope "ERROR"
// console.log(b); Accessing b outside the scope "ERROR"
console.log(c); // Accessed because var acts like a variable declaration of global scope
