// ======================== functions part - 2 =========================

// Assuming a shopping cart with multiple values, i.e we don't know how much values the user gonna enter and we've to add prices of all the items

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 800));

// rest operator (... => rest operator {to add all the passed value in num1} and spread operator)

// Passing objects to function

// const user = {
//     username: "Prashant",
//     price: 199,
// };
// function handleObject(anyobject) {
//     console.log(
//         `Username is ${anyobject.username} and price is ${anyobject.price}`
//     );
// }

// handleObject(user);


// Passing Array to function

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(anyArray) {
    console.log(`The 2nd value of passed array is ${anyArray[1]}`);
}

// returnSecondValue(myNewArray);
// returnSecondValue([200, 400, 100, 600]);