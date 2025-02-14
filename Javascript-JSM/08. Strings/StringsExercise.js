// Guests
const Guestlist = "Our guests are: emma, jacob, isabella, ethan";

// 1. Get the length of the string and store it in a length variable.
const length = Guestlist.length;
console.log(length);

// 2. Uppercase the entire string and store it in a variable called uppercasedGuestList.
const uppercasedGuestList = Guestlist.toUpperCase();
console.log(uppercasedGuestList);

// 3. Check whether "ETHAN" is on the uppercasedGuestList. Store the answer in a called isEthanOnTheList variable.
const isEthanOnTheList = uppercasedGuestList.includes("ETHAN");
console.log(isEthanOnTheList);

// 4. Create a substring that only contains the following characters: "EMMA", "JACOB", "ISABELLA", "ETHAN". Store it in a called substringGuests variable.
const substringGuests = uppercasedGuestList.slice(16);
console.log(substringGuests);

// 5. Store these names in an array called guests, names should be in uppercase.
const guests = substringGuests.split(",");
console.log(guests);
