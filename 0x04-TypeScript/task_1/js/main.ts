interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: "Joel",
    lastName: "Asumani",
    fullTimeEmployee: true,
    location: "Elmina",
    contract: false
}

console.log(typeof teacher1, teacher1);
