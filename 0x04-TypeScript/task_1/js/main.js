var teacher1 = {
    firstName: "Joel",
    lastName: "Asumani",
    fullTimeEmployee: true,
    location: "Elmina",
    contract: false
};
var director1 = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "New York",
    numberOfReports: 5
};
console.log(typeof teacher1, teacher1);
console.log(typeof director1, director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ".").concat(lastName);
};
// function printTeacher(firstName: string, lastName: string): string {
//     return `${firstName.charAt(0)}.${lastName}`;
// };
console.log(printTeacher("John", "Doe")); // Output: J.Doe
console.log(printTeacher("Jane", "Smith")); // Output: J.Smith
