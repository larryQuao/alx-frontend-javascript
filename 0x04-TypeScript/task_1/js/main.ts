interface DirectorInterface {}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface Director extends Teacher {
    readonly numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}


const workFromHome = (teacher: Teacher): string => {
    return `Working from home`;
}

const getCoffeeBreak = (teacher: Teacher): string => {
    return `Getting a coffee break`;
}

const workTeacherTasks = (teacher: Teacher): string => {
    return `Getting to work`;
}

const teacher1: Teacher = {
    firstName: "Joel",
    lastName: "Asumani",
    fullTimeEmployee: true,
    location: "Elmina",
    contract: false
}

const director1: Director = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "New York",
    numberOfReports: 5
};

console.log(typeof teacher1, teacher1);
console.log(typeof director1, director1);

const printTeacher: printTeacherFunction = (firstName, lastName): string => {
    return `${firstName.charAt(0)}.${lastName}`;
}

// function printTeacher(firstName: string, lastName: string): string {
//     return `${firstName.charAt(0)}.${lastName}`;
// };

console.log(printTeacher("John", "Doe"));  // Output: J.Doe
console.log(printTeacher("Jane", "Smith")); // Output: J.Smith

const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName());    // Output: John