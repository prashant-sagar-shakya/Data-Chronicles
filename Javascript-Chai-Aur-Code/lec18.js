// ========================Objects de-structure and JSON API=======================

// de-structuring of objects

const course = {
	coursename: "js in hindi",
	price: "999",
	courseInstructor: "Prashant",
};

// console.log(course.courseInstructor);

const { courseInstructor: instructor } = course; // recomended for repeative getting of values to save writing course.courseInstructor again and again. It also converts courseInstructure to instructor if you want to convert like this.

// console.log(courseInstructor);
console.log(instructor);

// APIs
// API stands for Application Programming Interface. It is a set of rules and protocols that allow different software programs to communicate with each other and share data.

// APIs are in JSON format, in early days request comes through in an XML file

// {
//     "name": "Prashant",
//     "coursename": "JS in Hindi"
// }

// Sometimes APIs are get in the form of arrays instead of objects

// [
//     {},
//     {},
//     {}
// ]
