//------------------Task 1---------------
console.log("*** Output Task 1 ***")

interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[newKey: string]: any;
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};

console.log(teacher3);

//------------------Task 2---------------
console.log("*** Output Task 2 ***")

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};
console.log(director1);

//------------------Task 3---------------
console.log("*** Output Task 3 ***")

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
	return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

//------------------Task 4---------------
console.log("*** Output Task 4 ***")

interface StudentClassInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

interface StudentClassConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}

let StudentCls: StudentClassConstructor;
StudentCls = class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}

const newStudent = new StudentCls("Mortal", "Kombat");
console.log(newStudent.firstName);
console.log(newStudent.lastName);
console.log(newStudent.workOnHomework());
console.log(newStudent.displayName());
