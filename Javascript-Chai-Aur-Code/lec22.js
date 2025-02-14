// ========================= Scopes Part - 2 ============================

// Nested Scope

function one() {
    const username = "Prashant";

    function two() {
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if (true) {
    const username = "Prashant";
    if (username == "Prashant") {
        const website = " Youtube";
        console.log(username + website);
    }
    // console.log(website);   // Error => Due to child element
}

// console.log(username); // Error => due to out of scope

// ========================= Interesting ================================

function addOne(num) {
    return num + 1;
}

console.log(addOne(5));

// Assigning Function to a variable

// console.log(addTwo(5)); // Error => Due to varibale scope addTwo, known as hoisting.
const addTwo = function (num) {
    return num + 2;
};

console.log(addTwo(5));
