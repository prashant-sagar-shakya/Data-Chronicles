// Write a program that prints all the male people's first name given a complex object.
function maleNames(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].gender === "male") console.log(people[i].firstName);
  }
}

let people = [
  { firstName: "Prashant", lastName: "Shakya", gender: "male" },
  { firstName: "Sanjana", lastName: "Shakya", gender: "female" },
  { firstName: "Shreya", lastName: "Shakya", gender: "female" },
  { firstName: "Shubham", lastName: "Shakya", gender: "male" },
];

maleNames(people);
